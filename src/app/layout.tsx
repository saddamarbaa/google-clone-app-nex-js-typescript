import Footer from '@/components/Footer'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import '../styles/globals.css'
import Providers from './Providers'

export const metadata = {
	title: 'Google Clone app',
	description: 'Google Clone build with React + Next Js13 + TypeScript',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const session = await getServerSession(authOptions)
	console.log(' session', session)
	return (
		<html lang="en">
			<body className="relative flex min-h-screen flex-col">
				<Providers session={session}>
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
