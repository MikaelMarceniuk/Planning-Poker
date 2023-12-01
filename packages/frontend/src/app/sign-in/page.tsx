import AuthButton from "@/components/authButton"
import { NextPage } from "next"
import { Session, getServerSession } from "next-auth"
import Image from "next/image"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

const SignInPage: NextPage<{}> = async () => {
  const session: Session | null = await getServerSession(authOptions)
  if (session?.user) redirect("/dashboard")

  return (
    <main className="h-screen flex">
      <div className="flex w-96 m-auto flex-col justify-center px-6 py-12 border-2 border-indigo-600 rounded">
        <div className="mb-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            width={200}
            height={200}
            src={"/tailwind-icon.svg"}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Logue na sua conta
          </h2>
        </div>

        <div className="flex flex-column justify-center flex-col gap-2 ">
          <AuthButton text="Github" provider="github" />
          <AuthButton text="Discord" provider="discord" />
        </div>
      </div>
    </main>
  )
}

export default SignInPage
