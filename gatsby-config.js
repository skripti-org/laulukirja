module.exports = {
  siteMetadata: {
    title: `Laulukirja`,
    author: {
      name: `Skripti ry`,
      summary: ``,
    },
    description: `Skripti ry:n sähköinen laulukirja`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {},
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/laulut`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `saannot`,
        path: `${__dirname}/content/saannot`,
      },
    },
    "gatsby-source-filesystem-markdown-name",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Skriptin laulukirja`,
        short_name: `Laulukirja `,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/skripti_logo_trans.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
