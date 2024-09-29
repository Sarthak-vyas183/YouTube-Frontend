import React, { useContext, useState } from 'react';
import UserContext from '../../../context/UserContext';

function Login() {
  const { token } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Correctly accessing name and value
    setFormData((prev) => ({
      ...prev,
      [name]: value // Dynamically update the correct field
    }));
    console.log(formData.email)
  };

  return (
    <div className='space-y-2'>
      <div className="flex flex-col space-y-2">
        <input
          name="email" // Add name attribute
          value={formData.email}
          onChange={handleChange}
          className='bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500'
          type="email"
          placeholder='Email'
        />
        <div className="flex justify-between items-center">
          <input
            name="password" // Add name attribute
            value={formData.password}
            onChange={handleChange}
            className='bg-transparent text-white placeholder-gray-400 focus:outline-none'
            type="password"
            placeholder='Password'
          />
          <button className='text-blue-500 font-medium'>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
