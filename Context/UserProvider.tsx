import { createContext, useState, useMemo, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store'
import { User } from '../types/user'
import { View, Text, ActivityIndicator } from 'react-native'
import CenterView from '../Components/CenterView'
import axios, { AxiosError } from 'axios'
import { AUTH_BASE_URL } from '@env'
type Auth = {
  user: User | null
  register: () => Promise<void>
  login: (usename: string, password: string) => Promise<void>
  refresh: () => Promise<User>
  logout: () => Promise<void>
}

type ErrorType = {
  error: string
}

const AuthHTTP = axios.create({
  baseURL: AUTH_BASE_URL,
})

AuthHTTP.interceptors.response.use(
  (response) => {
    return response
  },
  (error: Error | AxiosError<ErrorType>) => {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data.error)
    }
  }
)

export const AuthContext = createContext<Partial<Auth>>({})

const AuthProvider: React.FC = ({ children }) => {
  enum State {
    loading,
    ready,
  }
  const [user, setUser] = useState<User | null>(null)
  const [state, setState] = useState<State>(State.loading)
  const login = async (username: string, password: string) => {
    try {
      const { data } = await AuthHTTP.post<User>('auth/login/password', {
        username: username.toLowerCase(),
        password,
      })
      console.log({ data })
      await SecureStore.setItemAsync('user', JSON.stringify(data))
      setUser(data)
    } catch (error) {
      throw error
    } finally {
    }
  }

  const refresh = async () => {
    try {
      if (!user) {
        throw new Error('no user')
      }
      const { refreshToken } = user
      const { data } = await AuthHTTP.post<User>(
        'auth/refresh',
        {},
        {
          headers: {
            Authorization: refreshToken,
          },
        }
      )
      await SecureStore.setItemAsync('user', JSON.stringify(data))
      setUser(data)
      return data
    } catch (error) {
      throw error
    }
  }
  const register = async () => {}
  const logout = async () => {
    await SecureStore.deleteItemAsync('user')
    setUser(null)
  }

  useEffect(() => {
    const checkLogin = async () => {
      const userItem: string | null = await SecureStore.getItemAsync('user')
      if (userItem) {
        const user: User = JSON.parse(userItem)
        setUser(user)
      }
      setState(State.ready)
    }

    checkLogin()
  }, [])

  return (
    <AuthContext.Provider value={{ user, register, login, refresh, logout }}>
      {state === State.loading ? (
        <CenterView>
          <ActivityIndicator />
        </CenterView>
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}

export default AuthProvider
