import axios from 'axios';

export function getProducts(page, limit) {
    return axios.get(`/api/products?_page=${page}&_limit=${limit}`);
}