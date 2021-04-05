import axios from "axios";

import { config } from "./config";

var axiosInstance = axios.create({
  baseURL: config[process.env.REACT_APP_ENV].baseURL
});

export default axiosInstance;