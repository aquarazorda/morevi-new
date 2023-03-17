export const defaultQueryParams = {
	refetchOnMount: false,
	refetchOnReconnect: false,
	refetchOnWindowFocus: false,
	retry: false
};

export const queries = {
	products: (page: number) => ['products', page],
	product: (id: string) => ['product', id],
	discogsFolders: ['dc_folders'],
	discogsFolder: (id: string) => ['dc_folder', id]
};