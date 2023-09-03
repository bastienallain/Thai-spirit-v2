'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

export interface MenuData {
  city: string
  area: string
  category: string
}
interface MenuDataContextProps {
  menuData: MenuData[]
  setMenuData: React.Dispatch<React.SetStateAction<MenuData[]>>
}

const MenuDataContext = createContext<MenuDataContextProps | undefined>(undefined)

export const useMenuData = (): MenuDataContextProps => {
  const context = useContext(MenuDataContext)
  if (!context) {
    throw new Error('useMenuData must be used within a MenuDataProvider')
  }
  return context
}

interface MenuDataProviderProps {
  children: ReactNode
}

export function MenuDataProvider({ children }: { children: React.ReactNode }) {
  const [menuData, setMenuData] = useState<MenuData[]>([])

  // Data Source

  const value = {
    menuData,
    setMenuData,
  }

  return <MenuDataContext.Provider value={value}>{children}</MenuDataContext.Provider>
}
