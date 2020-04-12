require("dotenv").config({
  path: `.env`,
})

const { AT_API_KEY, AT_BASE_ID, AT_TABLE_NAME } = process.env

module.exports = {
  siteMetadata: {
    title: `La Loove Coop`,
    description: `La Loove Coop`,
    author: `@laloove`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-source-airtable",
      options: {
        apiKey: AT_API_KEY,
        tables: [
          {
            baseId: AT_BASE_ID,
            tableName: AT_TABLE_NAME,
            // tableView: 'published',
            // queryName: '',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./graphql-types.d.ts`,
      },
    },
  ],
}
