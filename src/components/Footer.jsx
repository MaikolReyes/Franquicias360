import logo from '../img/logo.svg'
import linkedin from "../img/Linkedin.png";
import twitter from "../img/twitter.png";
import instagram from "../img/Instagram.png";

export const Footer = () => {
    return (
        <footer className="footerContainer">
            <div className='imageFooter'>
                <img className='logoFooter' src={logo} alt="" />
            </div>
            <div className='d-flex justify-content-center gap-5 text-white mt-5'>
                <a className='footerItem' href="">Sobre nosotros</a>
                <a className='footerItem' href="">Servicios</a>
                <a className='footerItem' href="">Franquicias</a>
                <a className='footerItem' href="">Contacto</a>
            </div>

            <div className='d-flex justify-content-center mt-5 gap-5'>
                <a href="">
                    <img src={instagram} alt="" />
                </a>
                <a href="">
                    <img src={linkedin} alt="" />
                </a>
                <a href="">
                    <img src={twitter} alt="" />
                </a>
            </div>
            <p className='text-white d-flex justify-content-center pt-5 m-0'>Copyright © 2023 Franquicias360, Todos los derechos reservados.</p>
        </footer>
    )
}
