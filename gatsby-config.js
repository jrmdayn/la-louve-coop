require("dotenv").config({
  path: `.env`,
})

const { AT_API_KEY, AT_BASE_ID } = process.env

module.exports = {
  siteMetadata: {
    title: `La Louve Coop`,
    description: `La Louve Coop`,
    author: `@lalouve`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LaLouve`,
        short_name: `La Louve`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
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
            tableName: "Fruits & Vegetables",
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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
