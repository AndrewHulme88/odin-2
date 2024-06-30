import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Clock from './clock.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Clock />
    <App />
  </React.StrictMode>,
)
