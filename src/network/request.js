import axios from 'axios'

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    // baseURL: 'http://192.168.1.4:8080/',
    timeout: 5000
  })


// 拦截器
  instance.interceptors.request.use(config => {
    // 1. 比如config中的一些信息不符合服务器需求
    // 2. 比如每次发送网络请求时， 都希望在界面显示一个请求的图标
    // 3. 某些网络请求（比如登录（token）），必须携带一些特殊信息
    return config;
  }, error => {
    console.log(error)
    return error;
  })

// 响应拦截
  instance.interceptors.response.use(res => {
    return res;
  })
  // 发送真正的网路请求
  return instance(config) ;
}
