import styled from "styled-components"
import { GrMenu, GrClose } from 'react-icons/gr'
import { a, useTransition } from "react-spring"
import { useUi } from "../providers/ui-provider"

interface Props {
  onClick: () => void
}

const StyledButton = styled.button`
  position: fixed;
  bottom: 16px;
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 40%);
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export default function MenuToggle({ onClick }: Props) {
  const { menu } = useUi()

  const transitions = useTransition(menu, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: menu
  })

  return (
    <StyledButton onClick={onClick}>
      {transitions(({ opacity }, item) =>
        item ? (
          <a.div
            style={{
              position: 'absolute',
              opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
            }}
          >
            <GrMenu />
          </a.div>
        ) : (
          <a.div
            style={{
              position: 'absolute',
              opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
            }}
          >
            <GrClose />
          </a.div>
        )
      )}
    </StyledButton>
  )
}