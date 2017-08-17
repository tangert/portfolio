module.exports = {
  siteMetadata: {
    author: 'Tyler Angert',
    title: `Tyler Angert Portfolio`,
  },
  plugins: [
    'gatsby-plugin-catch-links',
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp'
  ],
}
