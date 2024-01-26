import { create } from 'zustand'
import { Post } from '../../modules/posts/domain/Post.ts'
import { PostDataCreate } from '../../modules/posts/domain/PostDataCreate.ts'

interface PostsState {
  posts: Post[] | []
  setPosts: (posts: Post[]) => void
  loading: boolean
  setLoading: (loading: boolean) => void
  post: PostDataCreate
  setPost: (post: PostDataCreate) => void
  updatePost: (key: string, value: string) => void
  resetPost: () => void
}

export const usePostsStore = create<PostsState>()(set => ({
  posts: [],
  setPosts: posts => set({ posts }),
  loading: false,
  setLoading: loading => set({ loading }),
  post: { title: '', content: '', user_id: 1 },
  setPost: post => set({ post }),
  resetPost: () => set({ post: { title: '', content: '', user_id: 1 } }),
  updatePost: (key, value) =>
    set(state => ({ post: { ...state.post, [key]: value } }))
}))
