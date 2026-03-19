import React from 'react'
import NavBar from '../components/NavBar'
// import StartingPage from '../components/StartingPage'
import { Outlet } from 'react-router-dom'

const Page = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>

    </>
  )
}

export default Page