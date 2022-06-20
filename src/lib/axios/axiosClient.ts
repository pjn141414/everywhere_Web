import axios, { AxiosInstance } from 'axios';
import { dotenv } from 'lib/util/dotenv';
import requestHandler from './requestHandler';

const axiosClient: AxiosInstance = axios.create({
  baseURL: dotenv.SERVER,
});

axiosClient.interceptors.request.use(requestHandler);

export default axiosClient;