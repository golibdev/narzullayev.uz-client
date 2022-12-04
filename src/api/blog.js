import axios from 'axios';
import { baseUrl } from '../constants';

export const blogApi = {
   getAll: (query) => axios.get(
      `${baseUrl}blog`
   ),
   getPageAll: () => axios.get(
      `${baseUrl}blog/get-pagination`
   ),
   getTopBlogs: () => axios.get(
      `${baseUrl}/blog/top`
   ),
   getSearch: (params) => axios.get(
      `${baseUrl}blog/search-data/${params}`
   ),
   getPagination: (page) => axios.get(
      `${baseUrl}blog/get-pagination?page=${page}`
   ),
   getOne: (id) => axios.get(
      `${baseUrl}blog/${id}`
   )
}