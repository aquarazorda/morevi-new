import { Either, isLeft } from 'fp-ts/lib/Either';
import { InitializedResourceOptions, JSX, Resource, ResourceReturn, createContext, createEffect, createResource, useContext } from 'solid-js';
import { SetStoreFunction, createStore, produce } from 'solid-js/store';

export const cacheResource = <T,>(id_: string[], fetcher: (...args: any[]) => Promise<Either<string, T>>, options?: InitializedResourceOptions<any>): Resource<Either<string, T>> => {
    const id = id_.join('-');
    const provider = useQueryCache();

    if (!provider) {
      throw new Error('CacheProvider is not defined');
    };

    const { cache, setCache } = provider;
    
    if (!cache || !cache[id]) {
      const resource = createResource(fetcher);
      setCache(id, resource);

      createEffect(() => {
        if (resource[0]() && isLeft(resource[0]()!)) {
          setCache(produce((s) => delete s[id]));
        }
      });

      return resource[0];
    };

    return cache[id][0];
  };

const CacheContext = createContext<{
  invalidate: (id: string[]) => void,
  cache: Record<string, ResourceReturn<any>>,
  setCache: SetStoreFunction<Record<string, ResourceReturn<any>>>
}>();

type Props = { children: JSX.Element};

export const CacheProvider = <T,>(props: Props) => {
  const [cache, setCache] = createStore<Record<string, ResourceReturn<any>>>({});
  const invalidate = (id_: string[]) => {
    const id = id_.join('-');
    const [, { refetch }] = cache[id];
    refetch();
  }

  return <CacheContext.Provider value={{
    cache,
    setCache,
    invalidate
  }}>
    {props.children}
  </CacheContext.Provider>
};

export const useQueryCache = () => useContext(CacheContext);
