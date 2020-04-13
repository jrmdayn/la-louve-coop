import React from "react"
import styled from "styled-components"

import { Logo } from "./logo"

const StyledHeader = styled.header`
  background: rebeccapurple;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

const H1 = styled.h1`
  margin: 0;
  color: #ffffff;
  padding-left: 10px;
  font-size: 30px;
`

export const Header = ({ siteTitle }: { siteTitle: string }) => (
  <StyledHeader>
    <Container>
      <Logo />
      <H1>{siteTitle}</H1>
    </Container>
  </StyledHeader>
)
