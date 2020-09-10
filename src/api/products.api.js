import httpClient from './HTTPClient';

const END_POINT = '/products';

const getAllProducts = (search, pageSize, page) => httpClient.get(END_POINT + `?search=${search}&page_size=${pageSize}&page=${page}`)

export {
    getAllProducts,
}