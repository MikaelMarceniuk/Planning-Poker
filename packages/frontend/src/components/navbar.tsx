import { Session, getServerSession } from "next-auth"
import { authOptions } from "../app/api/auth/[...nextauth]/route"
import UserMenu from "./navbar/userMenu"

const Navbar: React.FC = async () => {
  const session: Session | null = await getServerSession(authOptions)

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <UserMenu
            src={session?.user?.image as string}
            alt={session?.user?.name as string}
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar