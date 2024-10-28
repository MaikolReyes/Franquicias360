import { arrayValores, arrayServicios, itemsLinkedln, itemsFranquicias } from './components'
import linkedin from './assets/img/linkedin1.png'
import compu from './assets/icons/compu.svg'
// Imagen de fondo para el texto principal
import textBackground from './assets/img/textBackground.png'
// Imagenes de Cruces
import cruz from './assets/img/cruz.png'
import cruz2 from './assets/img/cruz2.png'
import cruz3 from './assets/img/cruz3.png'

export const App = () => {

  return (
    <>
      {/* Hero Principal whit eslogan */}
      <div className="heroPrincipal">
        <div className='containerHeroText'>
          <img className='cruz' src={cruz} alt="imagen" />
          <img className='imageBackground' src={textBackground} alt="" />
          <h1 className="heroText">Impulsa el alcance de tu Franquicia</h1>
          <img className='cruz2' src={cruz2} alt="" />
          <p className="heroTextSubtitle">Nuestro sitio web es el lugar perfecto para que los franquiciantes muestren su trabajo y generen visibilidad </p>
          <button className="btn botonContactanosHero"><a className="fontButtonContacto" href="#contacto">CONTACTANOS</a></button>
        </div>
        <div className="containerCompu">
          <img className="compuBanner" src={compu} alt="" />
          <img className='cruz3' src={cruz3} alt="" />
        </div>
      </div>

      {/* Commercial text */}
      <section className="containerTextSecondary">
        <h2 className="textSecondary">Nuestra misión es generar una <span className='textResalt'>plataforma de comunicación</span>  de valor para la comunidad de franquiciantes, brindando contenido relevante, oportunidades de visibilidad y espacios de interacción.</h2>
      </section>

      {/* Section of valor in the company */}
      <section className="textSectionValores">
        <h4 id='nosotros' className='textSubtitle'>Nuestros valores</h4>
        <h3 className="textTitle">¿Por qué elegirnos?</h3>
      </section>

      <div className="containerValores">
        {arrayValores.map(({ url, description, title, id }) => (
          <div className="itemValores" key={id}>
            <img className='iconValores' src={url} alt="" />
            <div>
              <h3 className='titleValores'>{title}</h3>
              <p className='textValores'>{description}</p>
            </div>
          </div>
        ))};
      </div >

      {/* Sections of services in the company */}
      <section className="sectionTextServicios" id='servicios'>
        <h4 className='textSubtitle'>Servicios</h4>
        <h3 className="textTitle mb-5">Impulsa tu franquicia con nosotros</h3>
        <h5 className='textImpulsaFranquicia'>En Franquicias 360, ofrecemos una <span className='textResalt2'>amplia gama de servicios de marketing, publicidad y branding</span> para ayudar a los franquiciantes a potenciar su presencia en el mercado y alcanzar sus objetivos comerciales</h5>
      </section>

      <div className="containerServicios">
        {arrayServicios.map(({ url, description, title, id }) => (
          <div className="itemServicios" key={id} >
            <img className='iconServicios' src={url} alt="" />
            <div>
              <h3 className='titleServiciosLarge'>{title}</h3>
              <p className='textServicios'>{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image intermediate for publicity */}
      <section className="imageContenedor">
        <p className="textContactanos">¡Aprovecha esta ventaja especial como franquiciante de Franquicias 360 y eleva tu presencia en el mundo de las franquicias con nosotros!</p>
        <button className="botonContactanos"><a className='fontButtonContacto' href='#contacto'>CONTACTANOS</a></button>
      </section>

      {/* Section of franquicies */}
      <section id="franquicias">
        <h4 className="textTitle mx-auto">Franquicias</h4>
        <h3 className="textTitleFranquicias mx-auto mt-0 mb-5">que trabajan con nosotros</h3>
      </section>

      <div className="containerImageFranquicias">
        {itemsFranquicias.map(({ id, url, logo }) => (
          <div className="containerImage" key={id}>
            <img className="imageFranquicias" src={url} alt="" />
            <img className="logoFranquicia" src={logo} alt="" />
          </div>
        ))}
      </div>

      {/* Section of linkedin */}
      <div className="sectionLinkedin">
        <div className="d-flex align-items-center">
          <img className="logoLinkedin" src={linkedin} alt="" />
          <h2 className="textFranquiciasLinkedin">Franquicias360</h2>
        </div>
        <a href="https://www.linkedin.com/company/franquicias360/" target="blank_"><button className="botonLinkedin">SIGUENOS EN LINKEDIN</button></a>
      </div>

      <div className="mt-5 mb-5 d-flex justify-content-center">
        <div className="containerImageLinkedin">
          {itemsLinkedln.map(({ url, image, id }) => (
            <a target="blank_" key={id} href={url}><img className="imageLinkedin" src={image} alt="" /></a>
          ))}
        </div>
      </div>
    </>
  )
}
