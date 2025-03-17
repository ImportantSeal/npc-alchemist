import React, { useState } from 'react';
import { AuthContext } from './auth-context';

export const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);
  
    const login = (uid, token, name = null) => {
      setUserId(uid);
      setToken(token);
      setUserName(name);
    };
  
    const logout = () => {
      setUserId(null);
      setToken(null);
      setUserName(null);
    };
  
    return (
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token,
          userId,
          userName,
          login,
          logout
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
