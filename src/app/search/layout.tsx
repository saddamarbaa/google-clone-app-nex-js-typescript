import SearchHeader from '@/components/SearchHeader'
import '../../styles/globals.css'

export default function SearchLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex min-h-[70vh] flex-col">
			<SearchHeader />
			{children}
		</div>
	)
}
