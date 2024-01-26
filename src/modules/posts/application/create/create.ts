import { PostRepository } from '../../domain/PostRepository.ts'
import { PostDataCreate } from '../../domain/PostDataCreate.ts'

export async function createPost(
  postRepository: PostRepository,
  post: PostDataCreate
) {
  return await postRepository.create(post)
}
