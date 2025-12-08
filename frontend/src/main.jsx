import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

// // Fontawesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap JS (optional)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
