module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'pool-landing-page',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-anchor-links',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
  ],
}
