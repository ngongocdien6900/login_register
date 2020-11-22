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
    // Do something before request is sent
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
    const {
      data,
      config,
      status
    } = error.response;
    if (config.url === '/auth/register' && status === 409) {
      throw new Error(data.message);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;