import { PostDataCreate } from '../domain/PostDataCreate.ts'
import { PostRepository } from '../domain/PostRepository.ts'

const BLOG_API_URL = import.meta.env.BLOG_API_URL ?? 'http://localhost:3000/api'

export function createApiPostsRepository(): PostRepository {
  return {
    getPosts,
    getPostById,
    create
  }
}

async function getPosts() {
  const response = await fetch(`${BLOG_API_URL}/posts`)
  return await response.json()
}

async function getPostById(id: number) {
  const response = await fetch(`${BLOG_API_URL}/posts/${id}`)
  return await response.json()
}

async function create(post: PostDataCreate) {
  const response = await fetch(`${BLOG_API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  return await response.json()
}
