import { Routes, Route } from 'react-router-dom'
import MenuToggle from './components/menu-toggle'

import { useUi } from './providers/ui-provider'
import useMediaQuery from './hooks/media-query'
import Home from './pages/home'
import News from './pages/news'
import NotFound from './pages/not-found'
import styled from 'styled-components'

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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    {handheld && <>
      <StyledFade />
      <MenuToggle onClick={toggleMenu} />
    </>}
  </>
}