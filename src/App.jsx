import { Hero, Valores, Services, Franquicias, Linkedin } from './layout'
import { Navbar, Footer, Form } from './components'

export const App = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Valores />
      <Services />
      <Franquicias />
      <Linkedin />
      <Form />
      <Footer />
    </>
  )
}
