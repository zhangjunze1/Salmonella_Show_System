import axios from 'axios'

// eslint-disable-next-line no-unused-vars
const instance = axios.create({
  baseURL: 'http://121.196.160.71:8085',
  timeout: 2000
})

export default instance
