import React from 'react'
import { Link, NavLink} from 'react-router-dom'
const NavBar = () => {
  return (
    <>
    <div className='bg-black flex justify-between h-50 p-2 items-center'>
        <div className='w-40'>
            <img src="/TnSymbol.png" alt="" />
        </div>
        <div className='text-white'>
            <h1>TAMIL NADU</h1>
            <h2>ASSEMBLY ELECTIONS 2026</h2>
        </div>
        <div className='flex gap-5'>
            <NavLink to="/login" className={({ isActive }) =>
             isActive
              ? "bg-yellow-500 p-2 rounded-2xl text-black"
             : "bg-white p-2 rounded-2xl text-black"
             }>Login</NavLink>

<NavLink 
  to="/register"
  className={({ isActive }) =>
    isActive
      ? "bg-yellow-500 p-2 rounded-2xl text-black"
      : "bg-white p-2 rounded-2xl text-black"
  }
>
  Register
</NavLink>
        </div>
    </div>
    </>
  )
}

export default NavBar