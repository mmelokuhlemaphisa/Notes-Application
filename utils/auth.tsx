import React, { createContext, ReactNode, useContext, useState } from "react";

export type User = { email: string; username: string; password: string };

type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateProfile: (updatedUser: User) => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  login: (_user: User) => {},
  logout: () => {},
  updateProfile: (_user: User) => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (u: User) => setUser(u);
  const logout = () => setUser(null);
  const updateProfile = (updatedUser: User) => setUser(updatedUser);

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn: user !== null, login, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
