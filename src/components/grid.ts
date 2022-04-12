import styled from "styled-components";

interface GridProps {
  size?: string
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ size }) => size ? `repeat(auto-fit, minmax(${size}, 1fr))` : 'repeat(auto-fit, minmax(12rem, 1fr))'};
  grid-gap: 2rem;
`

export const GridItem = styled.div`
  display: flex;

`