import NextAuth from "next-auth"

// importing providers
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";




const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.FIREBASE_GOOGLE_WEB_CLIENT_ID!,
			clientSecret: process.env.FIREBASE_GOOGLE_WEB_CLIENT_SECRET!,
		}),
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
	],
	secret: process.env.NEXT_AUTH_SECRET,
	jwt: {
		secret: process.env.NEXT_AUTH_SECRET,
	},
	 callbacks: {
      session({ session, token }) {
      //  console.log("been",session)
        return session
      }
    }
  })


export { handler as GET, handler as POST }