import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Greeting from "./Greeting.jsx";
import FaveFood from "./FaveFood.jsx";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FaveFood />
  </StrictMode>,
)
