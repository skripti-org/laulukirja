module.exports = {
  siteMetadata: {
    title: `Laulukirja`,
    author: {
      name: `Skripti ry`,
      summary: `Skripti ry - Tietojenkäsittelytiede`,
    },
    description: `Skripti ry:n sähköinen laulukirja`,
    siteUrl: `https://laulukirja-skripti.vercel.app/`,
    social: {},
  },
  plugins: [
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/laulut`,
        name: `blog`,
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
        background_color: `#212529`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#212529`,
        display: `minimal-ui`,
        icon: `src/images/skripti_logo_trans.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
      },
    },
  ],
}
