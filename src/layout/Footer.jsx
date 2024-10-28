import logo from '../assets/icons/logo.svg';

import linkedin from "../assets/img/linkedln.png";
import twitter from "../assets/img/twitter.png";
import instagram from "../assets/img/Instagram.png";

export const Footer = () => {
    return (
        <footer className="footerContainer">
            <div className='imageFooter'>
                <img className='logoFooter' src={logo} alt="" />
            </div>
            <div className='footer-link'>
                <a className='footerItem' href="#nosotros">Sobre nosotros</a>
                <a className='footerItem' href="#servicios">Servicios</a>
                <a className='footerItem' href="#franquicias">Franquicias</a>
                <a className='footerItem' href="#contacto">Contacto</a>
            </div>

            <div className='containerRedes'>
                <a href="#">
                    <img className='iconRedes' src={instagram} alt="" />
                </a>
                <a href="https://www.linkedin.com/company/franquicias360/">
                    <img className='iconRedes' src={linkedin} alt="" />
                </a>
                <a href="#">
                    <img className='iconRedes' src={twitter} alt="" />
                </a>
            </div>
            <p className='textCopyright'>Copyright © 2023 Franquicias360, Todos los derechos reservados.</p>
        </footer>
    )
}
