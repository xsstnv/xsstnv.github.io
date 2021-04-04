import axios from "axios"

var axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_ENV
});

export default axiosInstance;