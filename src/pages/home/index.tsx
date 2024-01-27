import Cover from '../../assets/images/cover.webp'
import { usePostsStore } from '../../sections/posts/PostStore.ts'
import { createApiPostsRepository } from '../../modules/posts/infra/ApiPostsRepository.ts'
import { getPosts } from '../../modules/posts/application/get-all/getPosts.ts'
import { PostDataResponse } from '../../modules/posts/domain/PostDataResponse.ts'
import { useCallback, useEffect, useState } from 'react'
import { Post } from '../../modules/posts/domain/Post.ts'
import PostList from '../../sections/posts/PostList.tsx'
import { useDebounce } from '../../hooks/useDebounce.ts'
import CoverHero from '../../components/CoverHero.tsx'
import useOnlineStatus from '../../hooks/useOnlineStatus.tsx'

const HomePage = () => {
  const repository = createApiPostsRepository()
  const posts = usePostsStore(state => state.posts)
  const setPosts = usePostsStore(state => state.setPosts)
  const setLoading = usePostsStore(state => state.setLoading)
  const [filterPosts, setFilterPosts] = useState<Post[]>([])
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 500)
  const isOnline = useOnlineStatus()

  const getAllPosts = async () => {
    try {
      setLoading(true)
      const response: PostDataResponse = await getPosts(repository)
      setPosts(response.data as Post[])
      setFilterPosts(response.data as Post[])
      localStorage.setItem('posts', JSON.stringify(response.data))
      setLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  const onSearchChange = useCallback(
    (value: string) => {
      setSearchValue(value ?? '')
    },
    [searchValue]
  )

  const searchPosts = (searchValue: string) => {
    const filteredPosts = posts.filter(post => {
      if (post.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return post
      } else if (
        post.content.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return post
      }
    })
    setFilterPosts(filteredPosts)
  }

  useEffect(() => {
    if (isOnline) {
      getAllPosts().catch(e => console.log(e))
    } else {
      const posts = JSON.parse(localStorage.getItem('posts') ?? '[]')
      setPosts(posts)
      setFilterPosts(posts)
    }
  }, [])

  useEffect(() => {
    if (!isOnline) {
      setLoading(false)
      const posts = JSON.parse(localStorage.getItem('posts') ?? '[]')
      setPosts(posts)
      setFilterPosts(posts)
    }
  }, [isOnline])

  useEffect(() => {
    if (debouncedSearchValue === '') {
      setFilterPosts(posts)
    } else {
      searchPosts(debouncedSearchValue)
    }
  }, [debouncedSearchValue])

  return (
    <div className='w-full min-h-[calc(100vh-4rem)] flex justify-center overflow-hidden pt-16 relative'>
      <main className='w-full h-auto max-w-6xl flex flex-col gap-10 px-5'>
        <CoverHero
          title={'Bienvenido a México Blog'}
          description={'El blog de los mexicanos'}
          image={Cover}
        />
        <div className='w-full flex flex-col gap-10'>
          <div className='w-full flex items-center justify-between gap-4'>
            <h2 className='text-2xl font-medium'>Posts</h2>
            <input
              className='px-5 py-2 transition-all duration-300'
              placeholder='Buscar posts'
              onChange={e => onSearchChange(e.target.value)}
            />
          </div>
          <div>
            <PostList posts={filterPosts} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
