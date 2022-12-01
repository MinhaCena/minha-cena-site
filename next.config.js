/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = {
	nextConfig,
	sassOptions: {
		includePaths: [path.join(__dirname, 'src', 'styles')],
		prependData: `
		@import "./theme/colors.scss";
		@import "./theme/typography.scss";
	 `,
	},
}
