import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MyApp } from './MyApp'
import { HolaMundo } from './HolaMundo'
import { UsoVariables} from './UsoVariables'
import { UsoImportes } from './UsoImportes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HolaMundo></HolaMundo>
    <UsoVariables></UsoVariables>
    <UsoImportes></UsoImportes>
  </StrictMode>,
)
