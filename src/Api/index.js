import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:54443/api/',
  baseURL: 'https://easyworkapi.herokuapp.com/',
});

export default api;
