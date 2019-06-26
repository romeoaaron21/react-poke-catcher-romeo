import axios from 'axios';

const getApi = axios.create({
  baseURL: ''
})

export { getApi };
