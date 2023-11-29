"use client"

import { SessionProvider } from "next-auth/react"

interface IProps {
  children: React.ReactNode
}

const CustomSessionProvider: React.FC<IProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default CustomSessionProvider
