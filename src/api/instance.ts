import axios from 'axios'
import { requestHandler } from './interceptor'

const { Axios } = axios

const instance = new Axios({
  baseURL: 'http://localhost:3000/api',
})

instance.interceptors.request.use(requestHandler)

// instance.interceptors.response.use(responseHandler)

export default instance
