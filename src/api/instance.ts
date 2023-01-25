import axios from 'axios'

const { Axios } = axios

const instance = new Axios({
  baseURL: 'http://localhost:3000/api',
})

export default instance
