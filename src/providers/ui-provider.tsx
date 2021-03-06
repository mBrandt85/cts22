import { 
  createContext,
  ReactNode, 
  useContext, 
  useEffect, 
  useState 
} from 'react'
import { a, useTransition } from 'react-spring'
import styled from 'styled-components'
import Menu from '../components/menu'

interface UiContext {
  toggleMenu: () => void
}

const Ui = createContext({} as UiContext)

const BackdropDiv = styled(a.div)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 80%);
  width: 100%;
  height: 100%;
`

const DrawerDiv = styled(a.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default function UiProvider({ children }: { children: ReactNode }) {
  const [backdrop, setBackdrop] = useState<boolean>(false)
  const [drawer, setDrawer] = useState<boolean>(false)

  const backdropTransition = useTransition(backdrop, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  const drawerTransition = useTransition(drawer, {
    from: { transform: 'translateY(100%)' },
    enter: { transform: 'translateY(0%)' },
    leave: { transform: 'translateY(100%)' }
  })

  const toggleMenu = () => {
    setBackdrop(!backdrop)
    setDrawer(!drawer)
  }

  useEffect(() => {
    if (backdrop) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [backdrop])

  return <Ui.Provider value={{
    toggleMenu
  }}>
    {children}
    {backdropTransition((styles, show) => show && <BackdropDiv style={styles} />)}
    {drawerTransition((styles, show) => show && <DrawerDiv style={styles}><Menu /></DrawerDiv>)}
  </Ui.Provider>
}

export const useUi = () => useContext(Ui)