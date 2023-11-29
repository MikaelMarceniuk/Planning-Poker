import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import DiscordProvider from "next-auth/providers/discord"
import axiosInstance from "@/libs/axios"

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      try {
        const body = {
          username: user.name,
          email: user.email,
          image: user.image,
          providerAccountId: account?.providerAccountId,
          provider: account?.provider,
        }
        await axiosInstance.post("/api/user", body)

        return true
      } catch (e) {
        return false
      }
    },
    async session({ session, user, token }) {
      try {
        const { data } = await axiosInstance.get(`/api/user/${token.sub}`)

        session.user.name = data.username
        session.user.email = data.email
        session.user.image = data.image
        session.user.providers = data.providers
      } catch (e) {
        console.log("Error: ", e)
      }

      console.log("ApiSession: ", session)
      return session
    },
  },
})

export { handler as GET, handler as POST, handler as authOptions }
