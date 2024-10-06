import http from '@/services/api'
import { type APIResponse } from '@/services/type'

export type TCategory = {
  _id: string
  slug: string
  name: string
}

const getCategories = async () => {
  return await http.get<APIResponse<TCategory[]>>('/the-loai')
}

export { getCategories }
