import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

function MyApp() {
  return (
  <h1>Hello world !@</h1>
  )
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyApp />
  </StrictMode>
)
