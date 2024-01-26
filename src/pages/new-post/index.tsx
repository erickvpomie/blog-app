import { FormEvent } from 'react'
import CreatePostForm from '../../sections/posts/CreatePostForm.tsx'
import { usePostsStore } from '../../sections/posts/PostStore.ts'
import Cover from '../../assets/images/compass.webp'
import CoverHero from '../../components/CoverHero.tsx'
import { createPost } from '../../modules/posts/application/create/create.ts'
import { createApiPostsRepository } from '../../modules/posts/infra/ApiPostsRepository.ts'
import { useNavigate } from 'react-router-dom'

const NewPostPage = () => {
  const navigate = useNavigate()
  const repository = createApiPostsRepository()
  const post = usePostsStore(state => state.post)
  const setLoading = usePostsStore(state => state.setLoading)
  const resetPost = usePostsStore(state => state.resetPost)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (post.title !== '' && post.content !== '') {
      await handleCreate()
    }
    resetPost()
  }

  const handleCreate = async () => {
    try {
      setLoading(true)
      await createPost(repository, post)
      setLoading(false)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='w-full min-h-[calc(100vh-4rem)] flex flex-col items-center overflow-hidden pt-16 scroll-smooth gutt'>
      <main className='w-full h-auto max-w-6xl flex flex-col gap-10 px-5'>
        <CoverHero
          title={'Crea una entrada'}
          description={'Crea una entrada para tu blog'}
          image={Cover}
          className={'h-[20rem]'}
        />
        <div className='w-full flex flex-col gap-4 max-w-6xl px-5'>
          <CreatePostForm onSubmit={handleSubmit} />
        </div>
      </main>
    </div>
  )
}

export default NewPostPage
