import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import App from './App'
import Providers from './providers'

ReactDOM.render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
  document.getElementById('root')
)