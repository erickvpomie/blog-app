import React, { FC } from 'react'
import { usePostsStore } from './PostStore.ts'

interface CreatePostFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const CreatePostForm: FC<CreatePostFormProps> = ({ onSubmit }) => {
  const post = usePostsStore(state => state.post)
  const updatePost = usePostsStore(state => state.updatePost)

  return (
    <div className='w-full flex flex-col gap-6'>
      <h1 className='text-xl font-medium'>Crear una entrada nueva</h1>
      <form className='flex flex-col gap-6 items-start' onSubmit={onSubmit}>
        <div className='w-full flex flex-col gap-4'>
          <label htmlFor='title'>Título</label>
          <input
            className='px-5 py-2'
            type='text'
            name='title'
            id='title'
            value={post.title}
            onChange={ev => updatePost('title', ev.target.value)}
          />
        </div>
        <div className='w-full flex flex-col gap-4'>
          <label htmlFor='content'>Contenido</label>
          <textarea
            className='px-5 py-2'
            name='content'
            id='content'
            value={post.content}
            onChange={ev => updatePost('content', ev.target.value)}
          />
        </div>
        <button
          className='bg-space-blue text-space-light px-5 py-2 font-medium'
          type='submit'
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default CreatePostForm
