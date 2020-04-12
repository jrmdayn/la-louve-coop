import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  background: rebeccapurple;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px;
`

const H1 = styled.h1`
  margin: 0;
`

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`

export const Header = ({ siteTitle }: { siteTitle: string }) => (
  <StyledHeader>
    <Container>
      <H1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </H1>
    </Container>
  </StyledHeader>
)
