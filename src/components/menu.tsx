import styled from "styled-components"

import { useUi } from "../providers/ui-provider"

const StyledMenu = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;

`

export default function Menu() {
  const { toggleMenu } = useUi()

  return (
    <StyledMenu>
      <button onClick={toggleMenu}>close</button>
      menu
    </StyledMenu>
  )
}