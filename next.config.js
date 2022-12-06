/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'src', 'styles')],
		prependData: `
		@import "./theme/colors.scss";
		@import "./theme/typography.scss";
	 `,
	},
}

module.exports = nextConfig
