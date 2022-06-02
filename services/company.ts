import { AxiosInstance } from 'axios'
import { Company, CompanyStampCard, Paginate } from '../types/api'

export interface CompanyServicesType {
  getCompanies: () => Promise<Paginate<Company>>
  getUserCompanyies: (ownerId: string) => Promise<Paginate<Company>>
  getCompanyStampcards: (
    companyId: string
  ) => Promise<Paginate<CompanyStampCard<string>>>
}

const CompanyServices: (api: AxiosInstance) => CompanyServicesType = (
  api: AxiosInstance
) => {
  const getCompanies = async () => {
    const { data } = await api.get<Paginate<Company>>('companies')
    return data
  }
  const getUserCompanyies = async (ownerId: string) => {
    const { data } = await api.get<Paginate<Company>>('companies', {
      params: {
        ownerId,
      },
    })
    return data
  }

  const getCompanyStampcards = async (companyId: string) => {
    try {
      const url = `companies/${companyId}/stampcards`
      const { data } = await api.get<Paginate<CompanyStampCard<string>>>(url)
      return data
    } catch (error) {
      throw error
    }
  }
  return {
    getCompanies,
    getUserCompanyies,
    getCompanyStampcards,
  }
}

export default CompanyServices
