import { Link, useLocation } from 'react-router-dom'
import useOnlineStatus from '../hooks/useOnlineStatus.tsx'
import { AlertTriangle } from 'lucide-react'

const Header = () => {
  const location = useLocation()
  const isOnline = useOnlineStatus()

  return (
    <div className='w-full h-16 flex items-center justify-center fixed bg-space-light bg-opacity-70 backdrop-blur-lg z-10'>
      <header className='w-full h-full max-w-6xl flex items-center justify-between px-5'>
        <Link to='/' className='text-lg font-medium'>
          México Blog
        </Link>
        <div className='flex items-center gap-2'>
          {!isOnline && (
            <div className='bg-space-red text-space-light px-5 py-2 font-medium flex items-center gap-1'>
              <AlertTriangle className='w-5 h-5' />
              Sin conexión
            </div>
          )}
          {location.pathname !== '/new-post' && (
            <Link
              to='/new-post'
              className={`bg-space-blue text-space-light px-5 py-2 font-medium ${!isOnline && 'opacity-50 cursor-not-allowed pointer-events-none'}`}
            >
              <span className='flex sm:hidden'>+</span>
              <span className='hidden sm:flex'>Publicar una entrada</span>
            </Link>
          )}
        </div>
      </header>
    </div>
  )
}

export default Header
