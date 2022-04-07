import { ReactNode} from 'react'

import UiProvider from './ui-provider'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <UiProvider>
      {children}
    </UiProvider>
  )
}