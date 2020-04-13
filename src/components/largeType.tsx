import React from "react"
import styled from "styled-components"

const List = styled.ul`
  border-radius: 10px;
  border: 1px solid #eee;
  box-shadow: 10px 10px 50px 5px #aaa;
  counter-reset: num-chars;
  overflow: hidden;
  padding: 0;
`

const Char = ({ char, ...props }: { char: string; length: number }) => (
  <li {...props}>
    <span>{char}</span>
  </li>
)

const charColor = (char: string) => {
  if (char.match(/[0-9]/i)) {
    // numbers
    return "#456cad"
  } else if (!char.match(/[a-z]/i)) {
    // symbols
    return "#b94669"
  }
}

const StyledChar = styled(Char)`
  counter-increment: num-chars;
  display: flex;
  flex-direction: column;
  float: left;
  font-family: monospace;
  font-size: ${({ length }) => `${Math.min(150 / length, 30)}vw`};
  color: ${({ char }) => charColor(char)};

  :nth-child(odd) {
    background: white;
  }

  :nth-child(even) {
    background: #f7f7f7;
  }

  ::after {
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    color: #aaa;
    content: counter(num-chars);
    display: block;
    font-size: 1.5vw;
    text-align: center;
    user-select: none;
  }
`

export const LargeType = ({ text }: { text: string }) =>
  text.length > 0 ? (
    <List>
      {text.split("").map((char, idx) => (
        <StyledChar key={idx} char={char} length={text.length} />
      ))}
    </List>
  ) : null
