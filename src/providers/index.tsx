import { ReactNode} from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

import UiProvider from './ui-provider'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <UiProvider>
          {children}
        </UiProvider>
      </HelmetProvider>
    </BrowserRouter>
  )
}