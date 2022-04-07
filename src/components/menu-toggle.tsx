import styled from "styled-components"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { a, useTransition } from "react-spring"

import { useUi } from "../providers/ui-provider"

interface Props {
  onClick: () => void
}

const StyledButton = styled(a.button)`
  position: fixed;
  bottom: 24px;
  left: calc(50% - 32px);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 40%);
  background-color: #800807;
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  border: none;
`

export default function MenuToggle({ onClick }: Props) {
  const { menu } = useUi()

  const transitions = useTransition(menu, {
    from: {
      opacity: 0,
      scale: 0,
      backgroundColor: menu ? 'white' : '#800807',
      color: menu ? '#800807' : 'white'
    },
    enter: { 
      opacity: 1,
      scale: 1,
      backgroundColor: menu ? 'white' : '#800807',
      color: menu ? '#800807' : 'white'
     },
    leave: { 
      opacity: 0,
      scale: 0,
      backgroundColor: menu ? 'white' : '#800807',
      color: menu ? '#800807' : 'white'
     }
  })

  return transitions((styles, item) =>
    item ? (
      <StyledButton onClick={onClick} style={styles}>
        <AiOutlineClose />
      </StyledButton>
    ) : (
      <StyledButton onClick={onClick} style={styles}>
        <AiOutlineMenu />
      </StyledButton>
    )
  )
}