import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 10px;
  max-width: 400px;
  background-color: #ffffff;
`
const Title = styled.h3``
const Code = styled.span``

export const Card = ({ title, code }: { title: string; code: number }) => (
  <Container>
    <Title>{title}</Title>
    <Code>{code}</Code>
  </Container>
)
