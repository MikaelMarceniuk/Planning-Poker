import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      name: string
      email: string
      image: string
      providers: { providerAccountId: string; provider: string }[]
    } & DefaultSession["user"]
  }
}
