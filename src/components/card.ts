import styled from "styled-components";


export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 0 .25rem .5rem rgba(0, 0, 0, 20%);
  border-radius: .4rem;
  overflow: hidden;
`

export const CardImage = styled.div`

`

export const CardTitle = styled.h1`
  margin: 1rem 0 0 0;
  padding: 0 1rem;
  font-family: 'Roboto Condensed';
  font-size: 1.2rem;
`

export const CardContent = styled.div`
  margin-top: 1rem;
  padding: 0 1rem;
`

export const CardAction = styled.div`
  margin-top: 1rem;
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: row-reverse;
`

export const CardTracks = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: .5rem 0 1rem 1rem;
  border-top: .05rem solid lightgray;
`

export const CardTracksItem = styled.div`
  margin: .5rem .5rem 0 0;
  padding: .5rem 1rem;
  background-color: lightgray;
  border-radius: .2rem;
  box-shadow: 0 .1rem .3rem rgba(0, 0, 0, 10%);
`