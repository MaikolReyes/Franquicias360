import React from 'react'
import ReactDOM from 'react-dom/client'
import { Principal } from './Franquicias360'
import { Navbar } from './components/Navbar'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Principal />
  </React.StrictMode>,

)
