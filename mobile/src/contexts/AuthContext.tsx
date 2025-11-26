import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Mock user type - will be replaced with Supabase User type later
interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = '@heartwise_auth';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const savedUser = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Error checking auth:', error);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  // Mock login - will be replaced with Supabase auth later
  const login = async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise<void>(resolve => setTimeout(resolve, 1000));

    // For demo purposes, accept any email/password
    // In production, this will call Supabase auth
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
    };

    setUser(mockUser);
    await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(mockUser));
  };

  // Mock signup - will be replaced with Supabase auth later
  const signup = async (email: string, password: string, name: string) => {
    // Simulate API call delay
    await new Promise<void>(resolve => setTimeout(resolve, 1000));

    // For demo purposes, create user immediately
    // In production, this will call Supabase auth
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      name,
    };

    setUser(mockUser);
    await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(mockUser));
  };

  // Logout
  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

