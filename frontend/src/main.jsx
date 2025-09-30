import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MainContext } from './context/maincontext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SocketContext } from './context/SocketContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <MainContext>
    <ToastContainer/>
      <SocketContext>
       <App />
      </SocketContext>
     </MainContext>
    </BrowserRouter>
  </StrictMode>,
)
