export type APIResponse<T> = {
  status: boolean
  data: T
  message?: string
}
