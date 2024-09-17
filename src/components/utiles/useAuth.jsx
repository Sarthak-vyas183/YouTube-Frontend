import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  // Define the state and logic for authentication (example: user state)
  const [user, setUser] = useState(null);

  // Example login function
  const login = (userData) => {
    setUser(userData);
  };

  // Example logout function
  const logout = () => {
    setUser(null);
  };

  // The value that will be provided to any component consuming this context
  const authContextValue = {
    user,
    login,
    logout,
    isAuthenticated: !!user, // Boolean to check if user is logged in
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
