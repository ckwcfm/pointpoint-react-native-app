import { AxiosInstance } from 'axios'
import CompanyServices, { CompanyServicesType } from './company'
import StampCardServics, { StampCardServiceType } from './stampcard'

export interface APIInstance {
  companyServices: CompanyServicesType
  stampCardServices: StampCardServiceType
}

export const API: (api: AxiosInstance) => APIInstance = (
  api: AxiosInstance
) => {
  const companyServices = CompanyServices(api)
  const stampCardServices = StampCardServics(api)
  return {
    companyServices,
    stampCardServices,
  }
}
