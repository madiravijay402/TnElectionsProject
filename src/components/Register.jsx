import React from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login"); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register