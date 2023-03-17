import { Suspense } from 'solid-js';
import { Outlet, useRouteData } from 'solid-start';
import { Folders } from '~/components/Folders/Folders';
import { ShowEither } from '~/components/Solid/ShowEither';
import { fetchFolders } from '~/server/discogs';

export const routeData = fetchFolders;

const Admin = () => {
	const data = useRouteData<typeof routeData>();

	return <>
		<Suspense fallback={<>Loading</>}>
			<ShowEither either={data()}>{Folders}</ShowEither>
		</Suspense>
		<Outlet />
	</>
};

export default Admin;