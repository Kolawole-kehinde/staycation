import React from 'react'
import NavBar from './Components/layout/NavBar'
import { Route, Routes } from 'react-router'
import HomePage from './pages/home'

const App = () => {
  return (
    <div>
       <NavBar/>
       <Routes>
          <Route path='/'>
          <Route index element={<HomePage />} />
            
          </Route>
       </Routes>
    </div>
  )
}

export default App
