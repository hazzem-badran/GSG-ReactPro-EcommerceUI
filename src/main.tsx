import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ViewProvider } from './context/ViewContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ViewProvider>
      <App />
    </ViewProvider>
  </StrictMode>,
)
