import Home from './pages/home'
import News from './pages/news'
import Schedule from './pages/schedule'
import Keynotes from './pages/keynotes'
import Workshops from './pages/workshops'
import Talks from './pages/talks'
import NotFound from './pages/not-found'

interface Routes {
  route: string
  text?: string
  element: any
  menu: boolean
}

export const routes: Routes[] = [
  { route: '*', element: NotFound, menu: false },
  { route: '/', text: 'Home', element: Home, menu: true },
  { route: '/talks', text: 'Speakers', element: Talks, menu: true },
  { route: '/workshops', text: 'Workshops', element: Workshops, menu: true },
  { route: '/schedule', text: 'Schedule', element: Schedule, menu: true },
  { route: '/keynotes', text: 'Keynotes', element: Keynotes, menu: true },
  { route: '/news', text: 'News', element: News, menu: true }
]