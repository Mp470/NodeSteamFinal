import axios from 'axios';

const axioApi = axios.create({
  baseURL: 'http://localhost:8080',
});

export { axioApi };
