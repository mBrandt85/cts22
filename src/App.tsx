import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { useUi } from './providers/ui-provider'
import useMediaQuery from './hooks/media-query'
import Home from './pages/home'
import NotFound from './pages/not-found'
import MenuToggle from './components/menu-toggle'



export default function App() {
  const { toggleMenu } = useUi()
  const handheld = useMediaQuery('(max-width: 768px)')

  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

    {handheld && <MenuToggle onClick={toggleMenu} />}
  </>
}