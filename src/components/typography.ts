import styled from "styled-components"

interface Props {
  size?: string
  margin?: string
}

export const Title = styled.h1<Props>`
  @import '../_variables.scss';

  margin: ${(({ margin }) => margin ? margin : '1rem 0 1rem 0')};
  padding-bottom: .5rem;
  color: #800807;
  border-bottom: .1rem solid #800807;
  font-size: ${(({ size }) => size ? size : '1.75rem')};
  text-transform: uppercase;
  font-family: 'Typewriter', 'Roboto Condensed', sans-serif;
`