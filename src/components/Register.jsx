import React from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login"); 
  };

  return (
    <div className='bg-red-900 my-50 mx-50 p-2 rounded'>
    <form onSubmit={handleSubmit} className='flex flex-col text-white gap-3'>
      <label >Name</label>
      <input type="text" placeholder="Name" className='bg-yellow-100 text-black rounded' />
      <label >Email</label>
      <input type="email" placeholder="Email" className='bg-yellow-100 text-black rounded'/>
      <label >Phone</label>
      <input type="phone" placeholder="phone" className='bg-yellow-100 text-black rounded'/>
      <label >AAdhar</label>
      <input type="number" placeholder="AADHAR NO" className='bg-yellow-100 text-black rounded'/>
      <button type="submit" className='bg-yellow-100 w-30 mx-25 text-black rounded hover:bg-white'>Register</button>
    </form>
    </div>
  );
}

export default Register