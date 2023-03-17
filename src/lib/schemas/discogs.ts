import { P } from 'ts-pattern';

export const folderSchema = {
	id: P.number,
	count: P.number,
	name: P.string,
};

export const foldersSchema = P.array(folderSchema);

export const foldersResponseSchema = {
	folders: P.array(folderSchema),
};

export type Folder = P.infer<typeof folderSchema>;
export type Folders = P.infer<typeof foldersSchema>;
export type FoldersResponse = P.infer<typeof foldersResponseSchema>;

const paginationSchema = {
	page: P.number,
	pages: P.number,
	per_page: P.number,
	items: P.number,
};

const releaseSchema = {
	id: P.number,
	rating: P.number,
	basic_information: {
		cover_image: P.string,
		title: P.string,
		year: P.number,
		labels: P.array({
			id: P.number,
			name: P.string,
		}),
		artists: P.array({
			name: P.string,
		}),
		genres: P.array(P.string),
		styles: P.array(P.string),
	},
	notes: P.array({
		field_id: P.number,
		value: P.string,
	}),
}

export const folderReleaseSchema = {
	pagination: paginationSchema,
	releases: P.array(releaseSchema),
};