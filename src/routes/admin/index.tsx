import { Show, Suspense } from 'solid-js';
import { useRouteData } from 'solid-start';
import { Folders } from '~/components/Folders/Folders';
import { ShowEither } from '~/components/Solid/ShowEither';
import { fetchFolders } from '~/server/discogs';

export const routeData = fetchFolders;

const Admin = () => {
	const { data, isFetching } = useRouteData<typeof routeData>();

	return <Suspense>
		<Show when={!isFetching()} fallback={<>Loading</>}>
			{JSON.stringify(data())}
			{/* <ShowEither either={data() && data()!} fallback={<>Invalid data</>}>
				{Folders}
			</ShowEither> */}
		</Show>
	</Suspense>
};

export default Admin;