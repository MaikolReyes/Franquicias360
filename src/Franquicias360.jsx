import compu from './img/compu.svg'
//
import colaboracion from "./img/colaboracion.svg";
import innovacion from "./img/innovacion.svg";
import comunidad from './img/comunidad.svg'
import calidad from './img/calidad.svg'
import etica from "./img/etica.svg";
//
import branding from './img/Icono_Branding.svg'
import contenido from './img/Icono_Contenido.svg'
import estrategias from './img/Icono_Estrategias.svg'
import publicidad from './img/Icono_Publicidad.svg'
import relaciones from './img/Icono_Relaciones.svg'
//
import textBackground from './img/textBackground.png'
//
import cruz from './img/cruz.png'
import cruz2 from './img/cruz2.png'
import cruz3 from './img/cruz3.png'

export const Principal = () => {

  return (
    <>
      <div className="heroPrincipal">
        <div className='containerHeroText'>
          <img className='cruz' src={cruz} alt="" />
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

      <section className="containerTextSecondary">
        <h2 className="textSecondary">Nuestra misión es generar una <span className='textResalt'>plataforma de comunicación</span>  de valor para la comunidad de franquiciantes, brindando contenido relevante, oportunidades de visibilidad y espacios de interacción.</h2>
      </section>

      <section className="textSectionValores">
        <h4 id='nosotros' className='textSubtitle'>Nuestros valores</h4>
        <h3 className="textTitle">¿Por qué elegirnos?</h3>
      </section>

      <div className="containerValores">

        <div className="itemValores">
          <img className='iconValores' src={colaboracion} alt="" />
          <div>
            <h3 className='titleValores'>Colaboracion</h3>
            <p className='textValores'>Fomentamos un ambiente de colaboración y cooperación, creando espacios para que franquiciantes compartan sus conocimientos y experiencias, con tal de promover la colaboración entre miembros de la comunidad.</p>
          </div>
        </div>

        <div className="itemValores">
          <img className='iconValores' src={calidad} alt="" />
          <div>
            <h3 className='titleValores'>Calidad</h3>
            <p className='textValores'>Nos comprometemos a ofrecer contenido de alta calidad, siempre será relevante, actualizado y útil para asegurar que nuestros recursos y eventos sean de nivel profesional. ¡Aportaremos un verdadero valor a nuestra comunidad!</p>
          </div>
        </div>
        <div className="itemValores">
          <img className='iconValores' src={innovacion} alt="" />
          <div>
            <h3 className='titleValores'>Innovacion</h3>
            <p className='textValores'>Buscamos estar a la vanguardia de las tendencias y mejores prácticas en marketing y franquicias. Impulsaremos la innovación en nuestras estrategias, recursos y eventos para promover un enfoque proactivo y creativo en todos nuestros procesos.</p>
          </div>
        </div>

        <div className="itemValores">
          <img className='iconValores' src={etica} alt="" />
          <div>
            <h3 className='titleValores'>Ética</h3>
            <p className='textValores'>Valoramos la ética en todas nuestras acciones. Promovemos prácticas comerciales éticas y transparentes entre los franquiciantes. Nos comprometemos a mantener la confidencialidad y el respeto hacia la información y propiedad intelectual compartida por los miembros de la comunidad.</p>
          </div>
        </div>

        <div className="itemValores">
          <img className='iconValores' src={comunidad} alt="" />
          <div>
            <h3 className='titleValores'>Comunidad</h3>
            <p className='textValores'>Nos preocupamos por construir una comunidad fuerte y solidaria de franquiciantes, promoviendo la participación activa, el respeto y la diversidad. Buscamos generar un ambiente inclusivo donde los franquiciantes se sientan valorados y apoyados en su crecimiento profesional y empresarial.</p>
          </div>
        </div>

      </div >

      <section className="sectionTextServicios" id='servicios'>
        <h4 className='textSubtitle'>Servicios</h4>
        <h3 className="textTitle mb-5">Impulsa tu franquicia con nosotros</h3>
        <h5 className='textImpulsaFranquicia'>En Franquicias 360, ofrecemos una <span className='textResalt2'>amplia gama de servicios de marketing, publicidad y branding</span> para ayudar a los franquiciantes a potenciar su presencia en el mercado y alcanzar sus objetivos comerciales</h5>
      </section>

      <div className="containerServicios mx-0">

        <div className="itemServicios" >
          <img className='iconServicios' src={estrategias} alt="" />
          <div>
            <h3 className='titleServicios w-75'>Estrategias de Marketing Digital</h3>
            <p className='textServicios'>Desarrollamos estrategias de marketing digital personalizadas que se adaptan a las necesidades y objetivos de tu franquicia. </p>
            <p className='textServicios'>Desde la optimización de tu web, la gestión de redes sociales, la creación de contenido además de la implementación de campañas de publicidad en línea y mucho más.</p>
          </div>
        </div>

        <div className="itemServicios" >
          <img className='iconServicios' src={publicidad} alt="" />
          <div>
            <h3 className='titleServicios w-75'>Publicidad en Medios Tradicionales</h3>
            <p className='textServicios'>Diseñamos y ejecutamos estrategias de publicidad en medios tradicionales, como prensa, radio, televisión y vallas publicitarias.</p>
            <p className='textServicios'>Logrando adaptarnos a tu mercado objetivo y directamente apoyar el crecimiento de tu franquicia.</p>
          </div>
        </div>


        <div className="itemServicios" >
          <img className='iconServicios' src={branding} alt="" />
          <div>
            <h3 className='titleServicios'>Branding y Diseño</h3>
            <p className='textServicios'>Creamos una identidad de marca sólida y atractiva para tu franquicia. Esto incluye la creación de Logotipo y los elementos visuales relacionados.</p>
            <p className='textServicios'>Además de recursos visuales y materiales para marketing, como folletos, catálogos, banners y otros recursos visuales para promocionar tu franquicia.</p>
          </div>
        </div>


        <div className="itemServicios" >
          <img className='iconServicios' src={relaciones} alt="" />
          <div>
            <h3 className='titleServicios'>Relaciones Públicas</h3>
            <p className='textServicios'>Planificamos maneras de generar una imagen positiva de tu franquicia en los medios de comunicación y la comunidad empresarial. </p>
            <p className='textServicios'>Esto puede incluir la redacción y distribución de comunicados de prensa, la gestión de entrevistas con medios y otras actividades que potenciaran la imagen publica de tu franquicia.</p>
          </div>
        </div>

        <div className="itemServicios" >
          <img className='iconServicios' src={contenido} alt="" />
          <div>
            <h3 className='titleServicios'>Estrategias de Contenido</h3>
            <p className='textServicios'>Creamos estrategias de contenido relevantes y valiosas para tu franquicia, incluyendo la creación de blogs, artículos, infografías, videos y otros formatos de contenido.</p>
            <p className='textServicios'>Estas estrategias buscan atraer, retener y fidelizar a tu audiencia objetivo, estableciendo a tu franquicia como un referente en tu industria.</p>
          </div>
        </div>

      </div>


      <section className="imageContenedor">
        <p className="textContactanos">¡Aprovecha esta ventaja especial como franquiciante de Franquicias 360 y eleva tu presencia en el mundo de las franquicias con nosotros!</p>
        <button className="botonContactanos"><a className='fontButtonContacto' href="#contacto">CONTACTANOS</a></button>
      </section>

    </>
  )
}
