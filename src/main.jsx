import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Navbar, Footer, Form } from './layout'
import './sass/styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Form />
    <Footer />
  </React.StrictMode>,

)
