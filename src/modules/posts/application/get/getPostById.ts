import { PostRepository } from '../../domain/PostRepository.ts'

export async function getPostById(
  postRepository: PostRepository,
  post_id: number
) {
  return await postRepository.getPostById(post_id)
}
