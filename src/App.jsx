import React from 'react'
import Navbar from './components/Navbar'
import AppRouter from './components/app-router/AppRouter'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full h-screen'>
        <Navbar />
        <AppRouter/>
        <Footer />
    </div>
  )
}

export default App