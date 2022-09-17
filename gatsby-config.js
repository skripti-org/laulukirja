module.exports = {
  siteMetadata: {
    title: `laulukirja`,
    author: {
      name: `Skripti ry`,
      summary: ``,
    },
    description: ``,
    siteUrl: `https://skripti.org`,
    social: {},
  },
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Major Mono Display`,
            file: `https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap`,
          },
          {
            name: `Roboto Slab`,
            file: `https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    'gatsby-source-filesystem-markdown-name',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
          `gatsby-remark-line-breaks`,
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
        short_name: `GatsbyJS`,
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
