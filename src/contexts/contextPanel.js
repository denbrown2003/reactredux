import React, { useContext, createContext } from 'react'

export const contextPanel = createContext();

export const usePanel = () => {return useContext(contextPanel)}