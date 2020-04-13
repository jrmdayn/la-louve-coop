import React, { useEffect } from "react"
import styled from "styled-components"
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock"

const Root = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  background-color: rgba(18, 68, 105, 0.2);
  backdrop-filter: blur(2px);
`

const Container = styled.div``

export const Modal: React.FC<{ onClose: () => void; open: boolean }> = ({
  onClose,
  open,
  children,
}) => {
  useEffect(() => {
    if (open) {
      disableBodyScroll(document.body)
    } else {
      enableBodyScroll(document.body)
    }
  }, [open])

  return (
    <Root onClick={onClose} open={open}>
      {children}
    </Root>
  )
}
