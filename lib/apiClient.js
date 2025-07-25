import axios from 'axios';
const API_BASE_URL = 'http://localhost:8000';
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  withXSRFToken: true,
});
export default apiClient;