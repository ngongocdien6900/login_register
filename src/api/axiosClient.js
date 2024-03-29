import axios from 'axios';

const axiosClient = axios.create({
  //khi gọi api chỉ cần chỉ định ở sau thôi
  baseURL: 'http://localhost:5000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    //lấy data của response thôi, còn lại không quan tâm
    return response.data;
  },
  function (error) {
    const URLS = ['/auth/register', '/auth/login'];
    const { data, config } = error.response;
    if (URLS.includes(config.url)) {
      throw new Error(data.message);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
