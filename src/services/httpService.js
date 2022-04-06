import axios from 'axios';

const httpService = axios.create({
  baseURL: 'http://localhost:3333'
})

export default httpService;