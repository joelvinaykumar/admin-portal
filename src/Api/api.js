import axios from 'axios';

import { API_HOST } from '../Utility/constant';

export const api = (path, method, data) => axios.create({
  baseURL: API_HOST,
  url: path,
  method,
  data,
})