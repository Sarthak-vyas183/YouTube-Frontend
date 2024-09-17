import React from 'react'
import { useAuth } from '../utiles/useAuth'

function Home() {
    const {user} = useAuth()
  return (
    <div>
      <h1 className='text-purple-700'>This is Home component</h1>
    </div>
  )
}

export default Home
