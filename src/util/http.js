import axios from 'axios'
import { Toast } from 'vant'
const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {
    'X-Client-Info':
    '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606697250632532718583809","bc":"440100"}'
  }
})
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  // console.log(config)
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 在成功后拦截 -- hideLoading
http.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  Toast.clear()

  return {
    ...response,
    aaa: 'kerwin'
  }
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  Toast.clear()
  return Promise.reject(error)
})
export default http
