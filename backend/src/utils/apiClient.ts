import axios from 'axios';
import config from 'config';


const apiClient = axios.create({
  baseURL: config.API_URL,
  timeout: 300000,
  headers: {
    Authorization: `Bearer ${config.API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export default apiClient;
