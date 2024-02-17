import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '../styles/globals.css'
import Footer from '@/components/Footer'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Google Clone app',
	description: 'Google Clone build with React + Next Js13 + TypeScript',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={inter.className}>
			<body className="relative flex min-h-screen flex-col">
				<Providers>
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
