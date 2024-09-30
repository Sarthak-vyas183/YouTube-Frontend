import React, { useEffect, useState } from 'react'
import UserContext from './UserContext'

function AuthProvider({children}) {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [User, setUser] = useState({
        fullName : '',
        email : '',
        username : '',
        coverImage : '',
        avatar : ''
    }); 

    let setLoggedUserData = (user) => {
        setUser({
          fullName : user.fullName,
          email : user.email,
          username : user.username,
          coverImage : user.coverImage,
          avatar : user.avatar 
        })
    }

   let setTokenToLS = (serverToken) => {
     setToken(serverToken);
     localStorage.setItem("token", serverToken)
   }
    
  return (
    <UserContext.Provider value={{setTokenToLS, setLoggedUserData,token, User}}>
      {children}
    </UserContext.Provider>
  )
}

export default AuthProvider
