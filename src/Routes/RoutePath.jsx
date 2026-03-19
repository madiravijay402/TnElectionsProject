import React from 'react'
import { Routes,Route } from 'react-router-dom'
// import Home from '../components/StartingPage'
import StartingPage from '../components/StartingPage'
import Login from '../components/Login'
import Register from '../components/Register'
import Page from '../page/Page'

const RoutePath = () => {
  return (
     <Routes>

        {/* Pages WITH Navbar */}
        <Route path="/" element={<Page/>}>
          <Route index element={<StartingPage/>} />
        </Route>

        {/* Pages WITHOUT Navbar */}
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

      </Routes>
  )
}

export default RoutePath