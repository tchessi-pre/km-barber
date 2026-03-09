/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	productionBrowserSourceMaps: true,
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on',
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=63072000; includeSubDomains; preload',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
					{
						key: 'Permissions-Policy',
						value:
							'camera=(), microphone=(), geolocation=(), interest-cohort=()',
					},
					{
						key: 'Content-Security-Policy',
						value:
							"default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.google.com *.googleapis.com; style-src 'self' 'unsafe-inline' *.googleapis.com; img-src 'self' data: *.google.com *.googleapis.com; font-src 'self' data: *.gstatic.com; frame-src 'self' *.google.com; connect-src 'self' *.google.com;",
					},
				],
			},
		];
	},
};

export default nextConfig;
