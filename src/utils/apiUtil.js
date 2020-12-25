import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:8080/', // 前端地址，服务器要更换
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  },
  validateStatus: function(status) {
    return status === 200
  }
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    if (error.request) {
      console.log(error.request.status)
    }
    console.log('err' + error)
    return Promise.reject(error)
  }
)

// response intercetor
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error)
    if (error.response) {
      console.log(error.response.status)
    }
    console.log('err' + error)
    return Promise.reject(error)
  }
)
service.defaults.baseURL = '/apiurl';
export default service
