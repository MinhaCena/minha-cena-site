/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/no-page-custom-font */

import '../styles/globals.scss'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<head>
				<meta charSet="UTF-8" />
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
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, user-scalable=no"
				/>
				<meta name="description" content="MinhaCena" />
				<title>Minha Cena</title>
			</head>
			<body>
				<div>{children}</div>
			</body>
		</html>
	)
}
