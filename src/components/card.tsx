import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 10px;
  max-width: 400px;
  background-color: #ffffff;
  cursor: pointer;
`
const Title = styled.h3``
const Code = styled.span``

export const Card = ({
  title,
  code,
  onClick,
}: {
  title: string
  code: number
  onClick: () => void
}) => (
  <Container onClick={onClick}>
    <Title>{title}</Title>
    <Code>{code}</Code>
  </Container>
)
