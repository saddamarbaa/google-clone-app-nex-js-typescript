import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
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
	callbackUrl: process.env.NEXT_AUTH_URL + '/api/auth/callback',
}

export default NextAuth(authOptions)
