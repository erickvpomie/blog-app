import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CoverHero from '../../components/CoverHero.tsx'
import { createApiPostsRepository } from '../../modules/posts/infra/ApiPostsRepository.ts'
import { getPostById } from '../../modules/posts/application/get/getPostById.ts'
import { Post } from '../../modules/posts/domain/Post.ts'
import Cover from '../../assets/images/angel.webp'
import { usePostsStore } from '../../sections/posts/PostStore.ts'

const PostPage: FC = () => {
  const repository = createApiPostsRepository()
  const setLoading = usePostsStore(state => state.setLoading)
  const params = useParams<{ id: string }>()
  const [post, setPost] = useState<Post>({
    post_id: 0,
    title: '',
    content: '',
    author_name: '',
    created_at: '',
    updated_at: ''
  })

  const getPostData = async () => {
    try {
      setLoading(true)
      const { data } = await getPostById(repository, +`${params.id}`)
      setPost(data as Post)
      setLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getPostData()
  }, [])

  return (
    <div className='w-full min-h-[calc(100vh-4rem)] flex flex-col items-center overflow-hidden pt-16 '>
      <main className='w-full h-auto max-w-6xl flex flex-col gap-10 px-5'>
        <CoverHero
          title={post.title}
          description={`Autor: ${post.author_name}`}
          image={Cover}
          className={'!h-[20rem]'}
        />
        <div className='w-full flex flex-col gap-4 max-w-6xl'>
          <div
            className='tex-lg'
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </main>
    </div>
  )
}

export default PostPage
