import { arrayServicios } from '../resources'

export const Services = () => {
    return (
        <>
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
        </>
    )
}
