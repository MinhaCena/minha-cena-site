/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-page-custom-font */
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import '../styles/globals.scss'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700;800&display=swap"
					rel="stylesheet"
				/>
				<title>Minha Cena</title>
			</head>
			<body>
				<Header />
				<div>{children}</div>
				<Footer />
			</body>
		</html>
	)
}
