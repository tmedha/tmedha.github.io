import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* HashRouter keeps routing fully client-side so GitHub Pages never 404s
        on refresh or deep links (URLs look like /#/projects). */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
