import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full flex flex-col items-center h-16'>
      <div className='w-full h-full max-w-6xl flex items-center justify-between px-5'>
        <span className='text-base opacity-40'>
          © 2024 Erick Pomié. Todos los derechos reservados.
        </span>
        <Link
          to='https://erickvpomie.vercel.app/'
          target='_blank'
          title='Portfolio'
          aria-label='Portfolio'
          className='cursor-pointer font-medium text-center rounded-3xl flex items-center gap-2 text-sm text-space-black active:scale-[1.05] transition-transform duration-300'
          rel='noreferrer'
        >
          <span>Portafolio</span>
          <ArrowUpRight name='arrow-up-right' size='20' />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
