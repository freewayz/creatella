import axios from 'axios';

export function getProducts(page, limit, sortBy) {
    return axios.get(`/api/products?_page=${page}&_limit=${limit}&_sort=${sortBy}`);
}