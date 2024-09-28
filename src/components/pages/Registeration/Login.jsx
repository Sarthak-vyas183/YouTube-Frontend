import React from 'react'

function Login() {
  return (
    <div className='space-y-2'>
      <div className="flex flex-col space-y-2">
        <input className='bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500' type="email" placeholder='Email' />
        <div className="flex justify-between items-center">
          <input className='bg-transparent text-white placeholder-gray-400 focus:outline-none' type="password" placeholder='Password' />
          <button className='text-blue-500 font-medium'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login