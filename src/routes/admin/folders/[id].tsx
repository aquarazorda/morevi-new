import { RouteDataFuncArgs, useRouteData } from '@solidjs/router';
import { Suspense } from 'solid-js';
import { ShowEither } from '~/components/Solid/ShowEither';
import { fetchFolder } from '~/server/discogs';


export const routeData = ({ params }: RouteDataFuncArgs) =>
  fetchFolder(params.id);

const FolderInfo = () => {
  const data = useRouteData<typeof routeData>();

  return <Suspense>
    <ShowEither either={data()}>
      {(data) => JSON.stringify(data)}
    </ShowEither>
  </Suspense>
}

export default FolderInfo;