import { createContext, useState, useEffect, useMemo } from 'react'
import * as SecureStore from 'expo-secure-store'
import { User } from '../Types/user'
import { View, Text, ActivityIndicator } from 'react-native'
import CenterView from '../Components/CenterView'
type Auth = {
  user: User | null
  register: () => Promise<void>
  login: () => Promise<void>
  refresh: () => Promise<void>
  logout: () => Promise<void>
}
export const AuthContext = createContext<Partial<Auth>>({})

const AuthProvider: React.FC = ({ children }) => {
  enum State {
    loading,
    ready,
  }
  const [user, setUser] = useState<User | null>(null)
  const [state, setState] = useState<State>(State.loading)
  const login = async () => {
    const user = {
      user: 'sfdsf',
      token: 'sdfsf',
    }
    setState(State.loading)
    await SecureStore.setItemAsync('user', JSON.stringify(user))
    setUser(user)
    setState(State.ready)
  }

  const refresh = async () => {}
  const register = async () => {}
  const logout = async () => {
    await SecureStore.deleteItemAsync('user')
    setUser(null)
  }

  const checkLogin = async () => {
    const userItem: string | null = await SecureStore.getItemAsync('user')
    if (userItem) {
      const user: User = JSON.parse(userItem)
      setUser(user)
    }
    setState(State.ready)
    // setUser({ user: 'sf', token: 'sdf' })
    console.log({ user })
  }

  useMemo(() => {
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
