import http from './index.js'

export const login = (data) => http.post('/login', data)