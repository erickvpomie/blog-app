import { PostRepository } from '../../domain/PostRepository.ts'

export async function getPosts(postRepository: PostRepository) {
  return await postRepository.getPosts()
}
