import { AxiosInstance } from 'axios'
import { Paginate, StampCard, StampCardWithCardInfo } from '../types/api'

export interface StampCardServiceType {
  getWithCardInfo: () => Promise<Paginate<StampCardWithCardInfo>>
}

const StampCardServics: (api: AxiosInstance) => StampCardServiceType = (
  api: AxiosInstance
) => {
  const getWithCardInfo = async () => {
    const { data } = await api.get<Paginate<StampCardWithCardInfo>>(
      `stampcards`,
      {
        params: { withCardInfo: true },
      }
    )
    return data
  }

  return {
    getWithCardInfo,
  }
}

export default StampCardServics
