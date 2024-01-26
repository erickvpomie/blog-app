import { Post } from './Post.ts'

export interface PostDataResponse {
  success: boolean
  data?: Post | Post[]
  message?: string
}
