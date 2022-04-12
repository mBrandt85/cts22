import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import logoRed from '../assets/logo-red.svg'
import { routes } from "../routes"

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 12rem;

  & > * {
    margin-top: 1rem;
  }

  & :first-child {
    margin-top: 0;
  }
`

const SidebarItem = styled.a`
  padding: .5rem 1rem;
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'Roboto Condensed';
  cursor: pointer;

  &:hover {
    color: white;
  }
`

const SidebarLogo = styled.img`
  width: 100%;
`

function MenuItem({ route, text }: { route: string, text: string }) {
  const navigate = useNavigate()

  return (
    <SidebarItem
      onClick={() => {
        navigate(route)
      }
    }>
      {text}
    </SidebarItem>
  )
}

export default function Sidebar() {
  return (
    <SidebarContent>
      <SidebarLogo src={logoRed} alt="CTS 2022" />
      {routes.map(({ route, text, menu }, key) => menu && <MenuItem key={key} route={route} text={text!} />)}
    </SidebarContent>
  )
}