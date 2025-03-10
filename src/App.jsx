import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/home'
import Footer from './Components/layout/Footer'
import HotelDetailPage from './pages/hotel/HotelDetailPage'
import NavBar from './Components/layout/NavBar'
import BrowseByPage from './pages/BrowseBy'
import StoriesPage from './pages/Stories'
import AgentsPage from './pages/Agents'
import HotelBookingPage from './pages/HotelBooking'

const App = () => {
  return (
    <div>
       <NavBar/>
       <Routes>
          <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path="browse" element={<BrowseByPage />} />
          <Route path="stories" element={<StoriesPage />} />
          <Route path="agents" element={<AgentsPage />} />
          <Route path="booking" element={<HotelBookingPage />} />

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
