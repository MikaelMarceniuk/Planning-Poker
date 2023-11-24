import Button from "@/components/button"
import { NextPage } from "next"
import { Session, getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

const DashboardPage: NextPage<{}> = async () => {
  const session: Session | null = await getServerSession(authOptions)
  if (!session?.user) {
    redirect("sign-in")
  }

  return (
    <div>
      This is DashboardPage
      <Button text="Sign Out" />
    </div>
  )
}

export default DashboardPage
