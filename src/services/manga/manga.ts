import http from '@/services/api'
import { type APIResponse } from '@/services/type'
import type { TCategory } from '../categories/category'

export type TChapter = {
  filename: string
  chapter_name: string
  chapter_title: string
  chapter_api_data: string
}
export type TServer = {
  server_name: string
  server_data: TChapter[]
}
export type TManga = {
  _id: string
  slug: string
  name: string
  status: 'ongoing' | string
  thumb_url: string
  sub_docquyen: boolean
  category: TCategory[]
  updatedAt: string
  chapters: TServer[]
  content: string
}

const getMangaHome = async () => {
  return await http.get<APIResponse<TCategory[]>>('/home')
}

const getMangaBySlug = async (slug: string) => {
  return await http.get<APIResponse<TManga>>(`/truyen-tranh/${slug}`)
}

const getMangaContent = async (url: string) => {
  return await http.get<APIResponse<any>>(url)
}

export { getMangaHome, getMangaBySlug, getMangaContent }
