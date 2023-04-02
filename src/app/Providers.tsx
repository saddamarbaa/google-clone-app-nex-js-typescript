'use client'

import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

type Props = {
	children: ReactNode
	session: Session | null
}

export default function Providers({ children, session }: Props) {
	return (
		<SessionProvider session={session}>
			<div>{children}</div>
		</SessionProvider>
	)
}
