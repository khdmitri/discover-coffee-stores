'use client'

import { createContext } from 'react'

export const StoreContext = createContext({})

export default function StoreProvider({ children }) {
  return <StoreContext.Provider value={{ state: {
      latLong: "",
      coffeeStores: [],
  }}}>{children}</StoreContext.Provider>
}