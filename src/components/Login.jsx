import React from 'react'


const Login = () => {
    
  return (
    <>
    <div>
    <div className='flex'>
        <div>
            <img src="/tnLogo.png" alt="" className='w-50'/>
        </div>
        
         <div className='text-black'>
            <h1 className='text-bold'>TAMIL NADU</h1>
            <h2>ASSEMBLY ELECTIONS 2026</h2>
        </div>
    </div>
    
    
        <div className='bg-black mx-50 my-50 w-75 h-60 rounded-2xl border-2 border-black flex flex-col text-white justify-center items-center p-2'>
            <div className='flex flex-col gap-2 '>
                <label >Name</label>
                <input type="text" className='bg-white rounded'/>
                <label>Voter id</label>
                <input type="text"  className='bg-white rounded' />
            </div>
            <div className='my-5'>
                <input type="submit" value={"Login"}  className='bg-white text-black rounded-2xl p-2 hover:bg-yellow-500'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login