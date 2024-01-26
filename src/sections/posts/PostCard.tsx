import { FC } from 'react'
import { Post } from '../../modules/posts/domain/Post.ts'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const PostCard: FC<Post> = ({
  post_id,
  title,
  content,
  author_name,
  updated_at
}) => {
  const lastUpdate = new Date(updated_at).toLocaleString('es-MX').slice(0, 9)

  return (
    <div
      className={`flex flex-col justify-between bg-space-gray h-[300px] col-span-12 sm:col-span-4 p-8 ${post_id === 1 && '!bg-space-black !text-space-light'}`}
    >
      <div className='flex flex-col gap-4'>
        <h4 className='text-2xl font-semibold'>{title}</h4>
        <p
          className='text-box'
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
      </div>
      <div className='flex items-end justify-between'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-2'>
            <span className='text-sm'>{lastUpdate}</span>
            <span className='text-sm'>{author_name}</span>
          </div>
        </div>
        <Link
          to={`/posts/${post_id}`}
          className={`flex items-center gap-1 py-2 px-4 bg-space-black text-white hover:bg-space-blue hover:text-space-light transition-colors duration-300 ${post_id === 1 && '!bg-space-light !text-space-black'}`}
        >
          <span>Ver más</span>
          <ChevronRight size={20} />
        </Link>
      </div>
    </div>
  )
}

export default PostCard
