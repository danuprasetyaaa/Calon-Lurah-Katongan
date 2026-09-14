const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',

  basePath: isGitHubPages ? '/Calon-Lurah-Katongan' : '',
  assetPrefix: isGitHubPages ? '/Calon-Lurah-Katongan' : '',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig