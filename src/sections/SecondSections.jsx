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

export const SecondSections = () => {
    return (
        <>
            <section id="franquicias">
                <h4 className="textTitle mx-auto">Franquicias</h4>
                <h3 className="textTitleFranquicias mx-auto mt-0 mb-5">que trabajan con nosotros</h3>
            </section>
            <div className="containerImageFranquicias mb-5">
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
                    <img src={linkedin} alt="" />
                    <h2 className="textFranquiciasLinkedin">Franquicias360</h2>
                </div>
                <button className="buttonForm">SIGUENOS EN LINKEDIN</button>
            </div>


            <div className="mt-5 mb-5 d-flex justify-content-center">

                <div className="containerImageLinkedin">
                    <img className="imageLinkedin" src={Beneficios} alt="" />
                    <img className="imageLinkedin" src={Libros} alt="" />
                    <img className="imageLinkedin" src={Smartdrink} alt="" />
                    <img className="imageLinkedin" src={LugarDeEncuentros} alt="" />
                    <img className="imageLinkedin" src={Subway} alt="" />
                    <img className="imageLinkedin" src={Curiosidades} alt="" />
                </div>

            </div>


            <div className="backgroundForm" id="contacto">
                <div>
                    <h3 className="textSectionForm1">Impulsa el alcance de tu <span className="textResaltForm">Franquicia</span></h3>
                    <h3 className="textSectionForm2">¿Trabajamos juntos?</h3>
                </div>

                <form action="" className="formularioConsultas">
                    <label htmlFor="" className="textForm">Nombre</label>
                    <input type="text" required className="labelForm rounded" />
                    <label htmlFor="" className="textForm">Correo Electronico</label>
                    <input type="email" required className="labelForm rounded" />
                    <label htmlFor="" className="textForm">Cuéntanos un poco sobre tu proyecto</label>
                    <textarea name="" required id="" cols="30" rows="10" className="labelForm rounded"></textarea>
                    <button className="buttonForm mx-auto">ENVIAR FORMULARIO</button>
                </form>
            </div>

        </>
    )
}
