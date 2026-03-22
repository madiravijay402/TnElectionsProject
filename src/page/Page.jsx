import React from 'react'
import NavBar from '../components/NavBar'
// import StartingPage from '../components/StartingPage'
import { Outlet } from 'react-router-dom'

const Page = ({ isLoggedIn, onLogout }) => {
  return (
    <>
        <NavBar isLoggedIn={isLoggedIn} onLogout={onLogout} />
        <Outlet/>

    </>
  )
}

export default Page