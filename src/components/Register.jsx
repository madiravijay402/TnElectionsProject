import React from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login"); 
  };

  return (
    <div className='min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8'>
      <div className='w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-sm p-6'>
        <h2 className='text-xl font-semibold text-slate-900 mb-5'>Register</h2>
        <form onSubmit={handleSubmit} className='flex flex-col text-slate-700 gap-3'>
          <label>Name</label>
          <input type="text" placeholder="Name" className='h-10 px-3 bg-slate-50 text-black border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-blue-300' />
          <label>Email</label>
          <input type="email" placeholder="Email" className='h-10 px-3 bg-slate-50 text-black border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-blue-300'/>
          <label>Phone</label>
          <input type="tel" placeholder="Phone" className='h-10 px-3 bg-slate-50 text-black border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-blue-300'/>
          <label>Aadhar</label>
          <input type="number" placeholder="Aadhaar No" className='h-10 px-3 bg-slate-50 text-black border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-blue-300'/>
          <button type="submit" className='mt-2 h-10 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors'>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register