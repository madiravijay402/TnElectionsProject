import React, { useState } from 'react'


const Login = () => {
  const[data]=useState([{anum:277586278640},{anum:864838374051},{anum:985623890663}])
  const[input,setInput]=useState("")
    
       const Handlechange = (e) => {
    setInput(e.target.value)
  }

  const HandleLogin = () => {
    let isFound = false

    if (input.length === 12) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].anum.toString() === input) {
          isFound = true
          break
        }
      }

      if (isFound) {
        alert("Login successful")
      } else {
        alert("Aadhaar number is wrong")
      }
    } else {
      alert("Aadhaar number must be 12 digits")
    }
      
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

      <div className='w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-sm p-6'>
        <div className='flex flex-col gap-3'>
          <label className='text-sm text-slate-700'>Adhaar number</label>
          <input type="number" required onChange={Handlechange} name='anum' value={input} className='h-10 px-3 bg-slate-50 border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-blue-300'/>
        </div>
        <div className='mt-6'>
          <input type="submit" onClick={HandleLogin} value={"Login"}  className='w-full h-10 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login