/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Header } from "./header"
import "./layout.css"

const Root = styled.div`
  background-color: #f5f5fa;
  height: 100vh;
`

const Main = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  max-width: 960px;
`

export const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Root>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>
        <main>{children}</main>
      </Main>
    </Root>
  )
}
