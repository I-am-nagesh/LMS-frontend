import axios from "axios";

const BASE_URL = "http://localhost: "
const axiosInstance = axios.create();

axiosInsatnce.defauts.baseURL = BASE_URL;
axiosInstance.defaults.timeout = 2500;

export default axiosInstance;