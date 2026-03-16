import Request from '../../js_sdk/luch-request/luch-request/index.js'

const http = new Request()

// 1. 全局配置
http.setConfig((config) => {
    config.baseURL = 'http://localhost:22345' // 你的 API 地址
    config.timeout = 10000 // 超时时间
    return config
})

// 2. 请求拦截器 (Request Interceptor)
http.interceptors.request.use((config) => {
    // 在这里添加 Token
    // const token = uni.getStorageSync('token')
    // if (token) {
    //     config.header['Authorization'] = `Bearer ${token}`
    // }
    
    // // 如果是 POST 请求且没传 header，默认补全
    // if (config.method === 'POST') {
    //     config.header['Content-Type'] = 'application/json'
    // }
    
    return config
}, (error) => {
    return Promise.reject(error)
})

// 3. 响应拦截器 (Response Interceptor)
http.interceptors.response.use((response) => {
    // 只返回业务数据 data
    const res = response.data
    
    // 根据后端约定的状态码处理
    if (response.header['Code'] != 200) {
        uni.showToast({ title: response.header['Error'] && decodeURIComponent(response.header['Error']) || `未知错误${response.header['Code']}`, icon: 'none' })
        
        // 比如 401 说明 Token 过期，跳转登录
        if (response.header['Code'] == 401) {
            uni.navigateTo({ url: '/pages/login/login' })
        }
        return Promise.reject(res)
    }
    
    return res
}, (error) => {
    // 这里的 error 是网络层面的错误（如 404, 500）
    uni.showToast({ title: '网络异常，请稍后重试', icon: 'none' })
    return Promise.reject(error)
})

export default http