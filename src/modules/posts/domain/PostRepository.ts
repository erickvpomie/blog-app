import { PostDataResponse } from './PostDataResponse.ts'
import { PostDataCreate } from './PostDataCreate.ts'

export interface PostRepository {
  getPosts: () => Promise<PostDataResponse>
  getPostById: (postId: number) => Promise<PostDataResponse>
  create: (post: PostDataCreate) => Promise<PostDataResponse>
}
