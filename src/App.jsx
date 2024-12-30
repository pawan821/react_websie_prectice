import React from 'react'
import Navbar from './components/Navbar'
import AppRouter from './components/app-router/AppRouter'
import Footer from './components/Footer'
import { useNavigate } from 'react-router-dom'


const App = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen'>
        <Navbar />
        <AppRouter/>
        {/* <div className='mt-5 flex gap-10'>
        <i class="ri-arrow-left-s-line text-3xl p-3" onClick={() => navigate(-1)}></i>
        <i class="ri-arrow-right-s-line text-3xl p-3" onClick={() => navigate(+1)}></i>
      </div> */}
        <Footer />
    </div>
  )
}

export default App