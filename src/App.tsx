import { Routes, Route } from 'react-router-dom'
import MenuToggle from './components/menu-toggle'

import { useUi } from './providers/ui-provider'
import useMediaQuery from './hooks/media-query'
import Home from './pages/home'
import News from './pages/news'
import Schedule from './pages/schedule'
import Keynotes from './pages/keynotes'
import Workshops from './pages/workshops'
import NotFound from './pages/not-found'
import styled from 'styled-components'
import Talks from './pages/talks'

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
      <Route path="/talks" element={<Talks />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/keynotes" element={<Keynotes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    {handheld && <>
      <StyledFade />
      <MenuToggle onClick={toggleMenu} />
    </>}
  </>
}