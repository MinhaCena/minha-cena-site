/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-page-custom-font */
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.scss'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html>
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
				<header>
					<Header />
				</header>
				<main>{children}</main>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	)
}
