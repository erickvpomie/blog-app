import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import NewPostPage from './pages/new-post'
import PostPage from './pages/post'
import HomePage from './pages/home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/posts/:id' element={<PostPage />} />
      <Route path='/new-post' element={<NewPostPage />}></Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
