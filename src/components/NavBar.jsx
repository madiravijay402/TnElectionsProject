import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const NavBar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate("/")
  }

  return (
    <>
    <div className='bg-slate-950 border-b border-slate-800 flex justify-between items-center px-4 md:px-8 py-3 md:py-4'>
        <div className='w-16 md:w-20 shrink-0'>
            <img src="/TnSymbol.png" alt="Tamil Nadu symbol" className='w-full h-full object-contain' />
        </div>
        <div className='text-white text-center'>
            <h1 className='font-bold text-base md:text-xl tracking-wide'>TAMIL NADU</h1>
            <h2 className='text-[10px] md:text-sm text-slate-300'>ASSEMBLY ELECTIONS 2026</h2>
        </div>
        <div className='flex gap-2 md:gap-3'>
            {isLoggedIn ? (
              <>
                <NavLink to="/vote" className={({ isActive }) =>
                 isActive
                  ? "bg-yellow-500 px-3 md:px-4 py-2 rounded-full text-black text-sm font-medium"
                 : "bg-white px-3 md:px-4 py-2 rounded-full text-black text-sm font-medium hover:bg-slate-200 transition-colors"
                 }>vote</NavLink>

                <NavLink to="/results" className={({ isActive }) =>
                 isActive
                  ? "bg-yellow-500 px-3 md:px-4 py-2 rounded-full text-black text-sm font-medium"
                 : "bg-white px-3 md:px-4 py-2 rounded-full text-black text-sm font-medium hover:bg-slate-200 transition-colors"
                 }>results</NavLink>

                <button
                  onClick={handleLogout}
                  className="bg-white px-3 md:px-4 py-2 rounded-full text-black text-sm font-medium hover:bg-slate-200 transition-colors"
                >
                  logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className={({ isActive }) =>
                 isActive
                  ? "bg-yellow-500 px-3 md:px-4 py-2 rounded-full text-black text-sm font-medium"
                 : "bg-white px-3 md:px-4 py-2 rounded-full text-black text-sm font-medium hover:bg-slate-200 transition-colors"
                 }>login</NavLink>

                <NavLink 
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-yellow-500 px-3 md:px-4 py-2 rounded-full text-black text-sm font-medium"
                      : "bg-white px-3 md:px-4 py-2 rounded-full text-black text-sm font-medium hover:bg-slate-200 transition-colors"
                  }
                >
                  register
                </NavLink>
              </>
            )}
        </div>
    </div>
    </>
  )
}

export default NavBar