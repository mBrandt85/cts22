import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import MenuToggle from './components/menu-toggle'
import { useUi } from './providers/ui-provider'
import useMediaQuery from './hooks/media-query'
import { routes } from './routes'
import Sidebar from './components/sidebar'

const Container = styled.div`
  display: flex;
`

const StyledFade = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background: linear-gradient(transparent, white);
`

export default function App() {
  const { toggleMenu } = useUi()
  const handheld = useMediaQuery('(max-width: 768px)')

  return <>
    <Container>
      {!handheld && <Sidebar />}

      <Routes>
        {routes.map(({ route, element: Element }, key) => <Route key={key} path={route} element={<Element />} />)}
      </Routes>
    </Container>

    {handheld && <>
      <StyledFade />
      <MenuToggle onClick={toggleMenu} />
    </>}
  </>
}