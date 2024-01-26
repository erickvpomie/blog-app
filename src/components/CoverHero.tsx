import { FC } from 'react'

interface CoverHeroProps {
  title: string
  description?: string
  image: string
  className?: string
}
const CoverHero: FC<CoverHeroProps> = ({
  title,
  description,
  image,
  className
}) => {
  return (
    <div
      className={`w-full h-[30rem] flex items-center bg-gray text-space-light relative overflow-hidden px-10 ${className}`}
    >
      <div className='flex flex-col gap-2 z-[2]'>
        <h1 className='text-5xl font-medium'>{title}</h1>
        {description && <p className='text-lg font-normal'>{description}</p>}
      </div>
      <div className='w-full h-full absolute left-0 top-0 z-[1] bg-gradient-to-t from-space-black via-[#0b0a104D] to-space-black opacity-60' />
      <img
        className='absolute w-full h-full object-cover left-0 top-0 z-0'
        src={image}
        alt='cover image'
      />
    </div>
  )
}

export default CoverHero
