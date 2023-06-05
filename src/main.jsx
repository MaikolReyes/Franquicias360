import React from 'react'
import ReactDOM from 'react-dom/client'
import { Principal } from './Franquicias360'
import { SecondSections } from './sections/SecondSections'
import { Navbar, Footer } from './components'
import './sass/styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Principal />
    <SecondSections />
    <Footer />
  </React.StrictMode>,

)
