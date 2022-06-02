export type StampCardWithCardInfo = StampCard<CompanyStampCard<Company>>

export type Company = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export type CompanyStampCard<T extends Company | string> = {
  activationDate: Date
  company: T
  createdAt: Date
  updatedAt: Date
  description: string
  enable: boolean
  expiryDate: Date
  id: string
  instructions: string[]
  name: string
  points: number
  quantity: number
}

export type StampCard<T extends CompanyStampCard<Company | string> | string> = {
  companyStampCard: T
  createdAt: string
  id: string
  points: number
  updatedAt: Date
  used: boolean
  userId: string
}

export type Paginate<T> = {
  docs: T[]
  hasNextPage: string
  hasPrevPage: string
  limit: number
  nextPage: number | null
  page: number
  pagingCounter: number
  prevPage: number | null
  totalDocs: number
  totalPages: number
}
