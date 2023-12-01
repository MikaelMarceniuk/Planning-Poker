import { NextPage } from "next"
import { Session, getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import Navbar from "@/components/navbar"

const DashboardPage: NextPage<{}> = async () => {
  const session: Session | null = await getServerSession(authOptions)
  if (!session?.user) redirect("sign-in")

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default DashboardPage
