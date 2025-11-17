import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import CatsApp from "./CatsApp.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CatsApp/>
  </StrictMode>
)
