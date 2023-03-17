import { pipe } from 'fp-ts/lib/function';
import { chain, right } from 'fp-ts/lib/TaskEither';
import server$ from 'solid-start/server';
import { cacheResource } from '~/lib/cache-resource';
import { folderReleaseSchema, foldersResponseSchema } from '~/lib/schemas/discogs';
import { mkReq } from '~/lib/utils';
import { queries } from '~/resources/queries';

const apiUrl = 'https://api.discogs.com';

const fetchFolders_ = server$(pipe(
	mkReq(foldersResponseSchema, `${apiUrl}/users/${process.env.DISCOGS_USERNAME}/collection/folders?token=${process.env.DISCOGS_TOKEN}`),
	chain(({ folders }) => right(folders))
));

export const fetchFolders = () => cacheResource(queries.discogsFolders, fetchFolders_);

const fetchFolder_ =  server$((id: string) => mkReq(
	folderReleaseSchema,
	`${apiUrl}/users/${process.env.DISCOGS_USERNAME}/collection/folders/${id}/releases?token=${process.env.DISCOGS_TOKEN}`
)());

export const fetchFolder = (id: string) => cacheResource(queries.discogsFolder(id), () => fetchFolder_(id));
