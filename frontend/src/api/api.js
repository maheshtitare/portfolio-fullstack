// Question: Axios API config

import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:10000', // ✅ FIXED
});

export default API;