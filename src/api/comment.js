import axios from 'axios';
import { baseUrl } from '../constants';

export const commentApi = {
   create: (blogId, params) => axios.post(
      `${baseUrl}comment/${blogId}`,
      params
   ),
}