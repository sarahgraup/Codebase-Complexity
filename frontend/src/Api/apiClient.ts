import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

const apiClient = axios.create({
  baseURL: `${BASE_URL}/apiRoutes`,
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    apiClient.defaults.headers.Authorization = `Bearer ${token}`;
  }
  else {
    delete apiClient.defaults.headers.Authorization;
  }
};

export default apiClient;
