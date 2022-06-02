import { Company } from './user'

export type DrawerStackParamList = {
  client: undefined
  admin: undefined
}

export type AuthStackParamList = {
  Login: undefined
  Register: undefined
}

export type TabStackPrarmList = {
  HomeTab: undefined
  SettingTab: undefined
}

export type HomeTabStackParamList = {
  Home1: undefined
  Home2: undefined
}

export type SettingsTabStackParamList = {
  Settings: undefined
}

export type AdminStackParamList = {
  AdminCompaniesScreen: undefined
  AdminCompanyCardsScreen: {
    company: Company
  }
  AdminCreateCompanyCardScreen: undefined
}
