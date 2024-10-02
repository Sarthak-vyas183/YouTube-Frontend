import React, { useEffect, useState } from 'react';
import UserContext from './UserContext';
import { toast } from 'react-toastify';
import axios from 'axios';

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [User, setUser] = useState({
    fullName: null,
    email: null,
    username: null,
    coverImage: null,
    avatar: null,
  });
 
  let setLoggedUserData = async () => {
    try {
      const response = await axios.post(
        `/api/v1/user/verifyUserToken`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      const userData = response.data;
      // Set the user data after verification
      setUser({
        fullName: userData.fullName,
        email: userData.email,
        username: userData.username,
        coverImage: userData.coverImage,
        avatar: userData.avatar,
      });
      
    } catch (error) {
      console.log(error);
      toast.error('Unable to verify user. Please log in again.');
      setToken(null);
      localStorage.removeItem('token');
    }
  };

  let LogoutUser = async() => {
    localStorage.removeItem("token")
    setToken("");
  } 

  let ClearUserData = () => {
     setUser({
      fullName: null,
      email: null,
      username: null,
      coverImage: null,
      avatar: null,
     })
  }

  useEffect(() => {
    if(token) {
      setLoggedUserData();
    } else {
      ClearUserData();
    }
  }, [token]);

  // Function to save token in local storage and state
  const setTokenToLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem('token', serverToken);
  };

  return (
    <UserContext.Provider value={{ setTokenToLS, token, User, LogoutUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default AuthProvider;
