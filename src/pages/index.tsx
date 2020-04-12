import React from "react"
import { Link, graphql } from "gatsby"

import { Layout, Image, SEO } from "../components"
import { AllAirtableQuery } from "../../graphql-types"

const IndexPage: React.FC<{
  data: AllAirtableQuery
  location: Location
}> = ({ data }) => (
  <Layout>
    <SEO title="Fruits & Légumes" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {data.allAirtable.nodes.map(({ data }) => (
      <div>
        {data?.Title} {data?.Code}
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query allAirtable {
    allAirtable {
      nodes {
        data {
          Code
          Status
          Title
        }
      }
    }
  }
`

export default IndexPage
