import axios from 'axios';

export function getProducts() {
    return axios.get('/api/products?_page=10&_limit=15');
}