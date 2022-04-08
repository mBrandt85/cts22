import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(12rem, 1fr) );
  grid-gap: 2rem;
`

export const GridItem = styled.div`
  display: flex;

`