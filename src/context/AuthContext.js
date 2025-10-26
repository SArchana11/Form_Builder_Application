import React, { createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);

  const login = (email, password) => {
    const existingUser = JSON.parse(localStorage.getItem(email));
    if (existingUser && existingUser.password === password) {
      setUser(existingUser);
      localStorage.setItem('user', JSON.stringify(existingUser));
      return true;
    }
    return false;
  };

  const register = (name, email, password) => {
    localStorage.setItem(email, JSON.stringify({ name, email, password }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
