import React from 'react'
import NavBar from './Components/layout/NavBar'
import { Route, Routes } from 'react-router'
import HomePage from './pages/home'
import Footer from './Components/layout/Footer'

const App = () => {
  return (
    <div>
       <NavBar/>
       <Routes>
          <Route path='/'>
          <Route index element={<HomePage />} />
            
          </Route>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App
