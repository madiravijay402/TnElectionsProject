import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ onLogin }) => {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    onLogin()
    navigate("/vote")
  }

  return (
    <>
    <div className='min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4 py-8'>
      <div className='flex items-center gap-4 mb-8'>
        <img src="/TnSymbol.png" alt="Tamil Nadu logo" className='w-16 h-16 object-contain'/>
        <div className='text-slate-900'>
          <h1 className='font-bold text-xl'>TAMIL NADU</h1>
          <h2 className='text-sm text-slate-600'>ASSEMBLY ELECTIONS 2026</h2>
        </div>
      </div>

      <form onSubmit={handleLogin} className='w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-sm p-6'>
        <div className='flex flex-col gap-3'>
          <label className='text-sm text-slate-700'>Name</label>
          <input type="text" placeholder="Enter your name" className='h-10 px-3 bg-slate-50 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-blue-300'/>
          <label className='text-sm text-slate-700'>Voter id</label>
          <input type="text" placeholder="Enter your voter id"  className='h-10 px-3 bg-slate-50 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-blue-300' />
        </div>
        <div className='mt-6'>
          <input type="submit" value={"Login"}  className='w-full h-10 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors'/>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login