import axios from 'axios';

const axiosClient = axios.create({
  //khi gọi api chỉ cần chỉ định ở sau thôi
  baseURL: 'http://localhost:5000/',
  headers: {
    'Content-Type': 'application/json',
  },

})

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
  //lấy data của response thôi, còn lại không quan tâm
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axiosClient;