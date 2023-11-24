"use client"

import { signOut } from "next-auth/react"
import { ButtonHTMLAttributes } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button: React.FC<IProps> = ({ text, ...rest }) => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/sign-in", redirect: true })}
      {...rest}
    >
      {text}
    </button>
  )
}

export default Button
