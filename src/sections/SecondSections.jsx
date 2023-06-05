import Beneficios from "../img/BeneficiosFranquicia.png";
import Libros from "../img/LibrosParaCrecer.png";
import Smartdrink from "../img/Smartdrink.png";
import LugarDeEncuentros from "../img/LagerhausLugarDeEncuentros.png";
import Subway from "../img/SubwayRenovacionGlobal.png";
import Curiosidades from "../img/Curiosidades.png";
import linkedin from '../img/linkedin1.png'
//
import lagerhausImage from "../img/lagerhaus.png";
import subwayImage from '../img/subway.png'
import smartdrinkImage from '../img/capsulas.png'
//
import logoSmartDrink from '../img/Capa_1.png'
import logoLager from '../img/logo-lagerhaus.png'
import logoSubway from '../img/subway-logo.png'
import swal from 'sweetalert'

export const SecondSections = () => {

    const sendForm = () => {
        swal({
            title: 'Tu consulta fue enviada',
            text: "Gracias por Contactarte",
            icon: "success"
        })
    }

    return (
        <>
            <section id="franquicias">
                <h4 className="textTitle mx-auto">Franquicias</h4>
                <h3 className="textTitleFranquicias mx-auto mt-0 mb-5">que trabajan con nosotros</h3>
            </section>

            <div className="containerImageFranquicias">

                <div className="containerImage">
                    <img className="imageFranquicias" src={subwayImage} alt="" />
                    <img className="logoFranquicia" src={logoSubway} alt="" />
                </div>

                <div className="containerImage">
                    <img className="imageFranquicias" src={smartdrinkImage} alt="" />
                    <img className="logoFranquicia" src={logoSmartDrink} alt="" />
                </div>

                <div className="containerImage">
                    <img className="imageFranquicias" src={lagerhausImage} alt="" />
                    <img className="logoFranquicia" src={logoLager} alt="" />
                </div>
            </div>

            <div className="sectionLinkedin">
                <div className="d-flex align-items-center">
                    <img className="logoLinkedin" src={linkedin} alt="" />
                    <h2 className="textFranquiciasLinkedin">Franquicias360</h2>
                </div>
                <a href="https://www.linkedin.com/company/franquicias360/" target="blank_"><button className="botonLinkedin"> SIGUENOS EN LINKEDIN</button></a>
            </div>


            <div className="mt-5 mb-5 d-flex justify-content-center">

                <div className="containerImageLinkedin">
                    <a target="blank_" href="https://www.linkedin.com/posts/franquicias360_franquicia-negocio-oportunidaddeinversiaejn-activity-7054891475016294401-TK3p?utm_source=share&utm_medium=member_desktop"><img className="imageLinkedin" src={Beneficios} alt="" /></a>
                    <a target="blank_" href="https://www.linkedin.com/posts/franquicias360_franquicia-negocio-oportunidaddeinversiaejn-activity-7057399063998046208-oYMF?utm_source=share&utm_medium=member_desktop"><img className="imageLinkedin" src={Libros} alt="" /></a>
                    <a target="blank_" href="https://www.linkedin.com/posts/franquicias360_franquicia-negocio-oportunidaddeinversiaejn-activity-7056276817220960256-242v?utm_source=share&utm_medium=member_desktop"><img className="imageLinkedin" src={Smartdrink} alt="" /></a>
                    <a target="blank_" href="https://www.linkedin.com/posts/franquicias360_franquicia-negocio-oportunidaddeinversiaejn-activity-7054529093165268992-CmGM?utm_source=share&utm_medium=member_desktop"><img className="imageLinkedin" src={LugarDeEncuentros} alt="" /></a>
                    <a target="blank_" href="https://www.linkedin.com/posts/franquicias360_franquicia-negocio-oportunidaddeinversiaejn- activity-7054891475016294401-TK3p?utm_source=share&utm_medium=member_desktop"><img className="imageLinkedin" src={Subway} alt="" /></a>
                    <a target="blank_" href="https://www.linkedin.com/posts/franquicias360_franquicia-negocio-oportunidaddeinversiaejn-activity-7056644704456634368-IQcQ?utm_source=share&utm_medium=member_desktop"><img className="imageLinkedin" src={Curiosidades} alt="" /></a>
                </div>
            </div>


            <div className="backgroundForm" id="contacto">
                <div>
                    <h3 className="textSectionForm1">Impulsa el alcance de tu <span className="textResaltForm">Franquicia</span></h3>
                    <h3 className="textSectionForm2">¿Trabajamos juntos?</h3>
                </div>

                <form className="formularioConsultas" onSubmit={sendForm} action="https://formsubmit.co/sofia@vilkas.com.ar" method="POST">
                    <label htmlFor="nombre" className="textForm">Nombre</label>
                    <input type="text" name="Nombre" required className="labelForm rounded" />

                    <label htmlFor="correo" className="textForm">Correo Electronico</label>
                    <input type="email" name="Correo Electronico" required className="labelForm rounded" />

                    <label htmlFor="mensajes" className="textForm">Cuéntanos un poco sobre tu proyecto</label>
                    <textarea name="Mensajes" required id="" cols="30" rows="10" className="labelFormTextarea rounded"></textarea>


                    <button type="submit" className="buttonForm mb-5 mx-auto">ENVIAR FORMULARIO</button>
                    <input type="hidden" name="_next" value="http://127.0.0.1:5173" />
                    <input type="hidden" name="_captcha" value='false' />

                </form>
            </div>

        </>
    )
}
