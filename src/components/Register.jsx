import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", aadhar: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }

    if (!formData.aadhar.trim()) {
      newErrors.aadhar = "Aadhaar is required";
    } else if (!/^\d{12}$/.test(formData.aadhar.trim())) {
      newErrors.aadhar = "Aadhaar must be exactly 12 digits";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate("/login"); 
  };

  return (
    <div className='min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8'>
      <div className='w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-sm p-6'>
        <h2 className='text-xl font-semibold text-slate-900 mb-5'>Register</h2>
        <form onSubmit={handleSubmit} className='flex flex-col text-slate-700 gap-4'>
          <div className='flex flex-col gap-1'>
            <label>Name</label>
            <input type="text" value={formData.name} onChange={handleChange} placeholder="Name" name='name' className={`h-10 px-3 bg-slate-50 text-black border ${errors.name ? 'border-red-500' : 'border-slate-300'} rounded-md outline-none focus:ring-2 focus:ring-blue-300`} />
            {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
          </div>
          <div className='flex flex-col gap-1'>
            <label>Email</label>
            <input type="email" value={formData.email} onChange={handleChange} placeholder="Email" name='email' className={`h-10 px-3 bg-slate-50 text-black border ${errors.email ? 'border-red-500' : 'border-slate-300'} rounded-md outline-none focus:ring-2 focus:ring-blue-300`} />
            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
          </div>
          <div className='flex flex-col gap-1'>
            <label>Phone</label>
            <input type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone" name='phone' className={`h-10 px-3 bg-slate-50 text-black border ${errors.phone ? 'border-red-500' : 'border-slate-300'} rounded-md outline-none focus:ring-2 focus:ring-blue-300`} />
            {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
          </div>
          <div className='flex flex-col gap-1'>
            <label>Aadhaar</label>
            <input type="number" value={formData.aadhar} onChange={handleChange} placeholder="Aadhaar No" name='aadhar' className={`h-10 px-3 bg-slate-50 text-black border ${errors.aadhar ? 'border-red-500' : 'border-slate-300'} rounded-md outline-none focus:ring-2 focus:ring-blue-300`} />
            {errors.aadhar && <span className="text-red-500 text-xs">{errors.aadhar}</span>}
          </div>
          <button type="submit" className='mt-2 h-10 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors'>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;