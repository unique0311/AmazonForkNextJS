// import type { User } from './user'

export interface Mentor {
  asin?: string
  title?: string
  salesRank: string | number
  dealCreatedAt?: string
  dealUpdatedAt?: string
  dropPercentage: number
  beforePrice: number
  price: number
  region: string
  brand: string
  manufacturer?: string
  description?: string | any
  isAdult: string | Boolean
  categoryId: string | number
  categoryName: string
  imageUrl?: string | any
  link?: string
}
