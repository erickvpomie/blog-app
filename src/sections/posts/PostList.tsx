import { FC } from 'react'
import { Post } from '../../modules/posts/domain/Post.ts'
import PostCard from './PostCard.tsx'
import { usePostsStore } from './PostStore.ts'

interface PostListProps {
  posts: Post[]
}
const PostList: FC<PostListProps> = ({ posts }) => {
  const loading = usePostsStore(state => state.loading)

  const renderLoadingOrEmpty = (message: string) => (
    <div className='h-[300px] col-span-12 flex items-center justify-center'>
      <span className='text-xl font-medium'>{message}</span>
    </div>
  )

  const renderPosts = () => {
    if (loading) {
      return (
        <>
          <div className='animate-pulse bg-gray-300 h-[300px] col-span-12 sm:col-span-4' />
          <div className='animate-pulse bg-gray-300 h-[300px] col-span-12 sm:col-span-4' />
          <div className='animate-pulse bg-gray-300 h-[300px] col-span-12 sm:col-span-4' />
        </>
      )
    }

    return posts.length === 0
      ? renderLoadingOrEmpty('No hay posts para mostrar')
      : posts.map(post => <PostCard key={post.post_id} {...post} />)
  }

  return (
    <div className='w-full max-w-6xl gap-4 mb-4 grid grid-cols-12 grid-rows-auto'>
      {renderPosts()}
    </div>
  )
}

export default PostList
