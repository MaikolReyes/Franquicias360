import React from 'react'
import ReactDOM from 'react-dom/client'
import { Principal } from './Franquicias360'
import { Navbar, Footer } from './components'
import './sass/styles.scss'
import { SecondSections } from './sections/SecondSections'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Principal />
    <SecondSections />
    <Footer />
  </React.StrictMode>,

)
