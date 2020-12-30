import axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from 'src/const';
import store from 'src/store';

const apiClient = axios.create({
  baseURL: API_URL,
});

const onRequest = (config: AxiosRequestConfig) => {
  const state = store.getState();
  const token = state?.user?.user?.token;

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: token ? 'Bearer ' + token : null,
    },
  };
};

apiClient.interceptors.request.use(onRequest);

export default apiClient;
