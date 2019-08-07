import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
const server = axios.create({
  baseURL: '/api',
  timeout: 1000
})
export default {
  get: (path: string, params: any) => {
    new Promise((resolve, reject) => {
      console.log(111)
      server.get(path, { params }).then(res => {
        if (res.data.code === 0) {
          return resolve(res.data)
        } else {
          reject(res.data.errorMessage)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  post: (path: string, params: any) => {
    new Promise((resolve, reject) => {
      server.post(path, params).then(res => {
        if (res.data.code === 0) {
          return resolve(res.data)
        } else {
          reject(res.data.errorMessage)
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}