// Question: Axios API config

import axios from 'axios';

const API = axios.create({
  baseURL: 'https://portfolio-backend-ym0v.onrender.com', 
});

export default API;