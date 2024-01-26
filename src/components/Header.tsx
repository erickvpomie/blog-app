import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  return (
    <div className='w-full h-16 flex items-center justify-center fixed bg-space-light bg-opacity-70 backdrop-blur-lg z-10'>
      <header className='w-full h-full max-w-6xl flex items-center justify-between px-5'>
        <Link to='/' className='text-lg font-medium'>
          México Blog
        </Link>
        {location.pathname !== '/new-post' && (
          <Link
            to='/new-post'
            className='bg-space-blue text-space-light px-5 py-2 font-medium'
          >
            Publicar una entrada
          </Link>
        )}
      </header>
    </div>
  )
}

export default Header
