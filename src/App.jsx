import React from 'react'
import NavBar from './Components/layout/NavBar'
import { Route, Routes } from 'react-router'
import HomePage from './pages/home'
import Footer from './Components/layout/Footer'
import HotelDetailPage from './pages/hotel/HotelDetailPage'

const App = () => {
  return (
    <div>
       <NavBar/>
       <Routes>
          <Route path='/'>
          <Route index element={<HomePage />} />

          <Route path='hotel'>
          <Route path=":id" element={<HotelDetailPage />} />
          </Route>
          
            
          </Route>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App
