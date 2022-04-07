import useMediaQuery from './hooks/media-query'
import { useUi } from './providers/ui-provider'

export default function App() {
  const { toggleMenu } = useUi()


  return (
    <>
      Yuck Fu!
      <button onClick={toggleMenu}>click me</button>
    </>
  )
}