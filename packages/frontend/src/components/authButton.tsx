"use client"

import { BuiltInProviderType } from "next-auth/providers/index"
import { signIn } from "next-auth/react"

interface IProps {
  text: string
  provider: BuiltInProviderType
}

const AuthButton: React.FC<IProps> = ({ text, provider }) => {
  return (
    <button
      onClick={() => signIn(provider)}
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </button>
  )
}

export default AuthButton
