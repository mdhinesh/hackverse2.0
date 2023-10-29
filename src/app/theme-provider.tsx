import { createContext } from 'react'
import React, { ReactNode } from 'react';

interface RootLayoutProps {
    children: ReactNode;
}
    
export const ThemeContext = createContext({})
 
export default function ThemeProvider({ children }: RootLayoutProps) {
    return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}