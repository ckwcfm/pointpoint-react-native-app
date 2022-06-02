import { API_BASE_URL } from '@env'
import axios, { AxiosInstance } from 'axios'
import { createContext, useContext } from 'react'
import { API, APIInstance } from '../services'
import { AuthContext } from './UserProvider'

export const APIContext = createContext<APIInstance>(API(axios))

const APIProvider: React.FC = ({ children }) => {
  const { user, refresh } = useContext(AuthContext)
  const http = axios.create({
    baseURL: API_BASE_URL,
  })

  http.interceptors.request.use(
    (config) => {
      console.log('intercepter request')
      config.headers = {
        Authorization: user?.token || '',
        'Content-Type': 'application/json',
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  http.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      try {
        const originalRequest = error.config
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true
          const user = await refresh?.()
          if (!user) {
            throw new Error('refresh fail')
          }
          const { token } = user
          originalRequest.headers.Authorization = token
          return axios(originalRequest)
        }
        throw error
      } catch (error) {
        return Promise.reject(error)
      }
    }
  )

  const api = API(http)

  return <APIContext.Provider value={api}>{children}</APIContext.Provider>
}

export default APIProvider
