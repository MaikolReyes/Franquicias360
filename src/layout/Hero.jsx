import compu from '../assets/icons/compu.svg'
// Imagen de fondo para el texto principal
import textBackground from '../assets/img/textBackground.png'
// Imagenes de Cruces
import cruz from '../assets/img/cruz.png'
import cruz2 from '../assets/img/cruz2.png'
import cruz3 from '../assets/img/cruz3.png'

export const Hero = () => {
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
        </>
    )
}
