import axios from 'axios';
import { baseUrl } from '../constants';

export const blogApi = {
   getAll: (query) => axios.get(
      `${baseUrl}blog`
   ),
   getPageAll: () => axios.get(
      `${baseUrl}blog/get-pagination`
   ),
   getPagination: (page) => axios.get(
      `${baseUrl}blog/get-pagination?page=${page}`
   ),
   getOne: (id) => axios.get(
      `${baseUrl}blog/${id}`
   )
}