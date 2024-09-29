import React, { useState } from 'react'
import UserContext from './UserContext'

function AuthProvider({children}) {
    const [token, setToken] = useState("kdhfdkfh")
  return (
    <UserContext.Provider value={{token, setToken}}>
      {children}
    </UserContext.Provider>
  )
}

export default AuthProvider
