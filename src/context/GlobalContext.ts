import React from 'react'

export type GlobalContextType = {
  username: string
  gender: number
  setGlobalContext?: React.Dispatch<React.SetStateAction<GlobalContextType>>
}

export const defaultGlobalContext: GlobalContextType = {
  username: '',
  gender: 0,
}

export const GlobalContext = React.createContext<GlobalContextType>(defaultGlobalContext)
