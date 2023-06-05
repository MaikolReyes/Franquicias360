import { useState } from 'react';
import logo from '../img/logo.svg'

export const Navbar = () => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };

    return (

        <nav className="nav">

            <a className='navbar__brand'><img src={logo} alt="" className='logo' /></a>

            <ul className={active}>

                <li className="nav__item">
                    <a onClick={navToggle} href="#nosotros" className="nav__link">Sobre Nosotros</a>
                </li>
                <li className="nav__item">
                    <a onClick={navToggle} href="#servicios" className="nav__link">Servicios</a>
                </li>
                <li className="nav__item">
                    <a onClick={navToggle} href="#franquicias" className="nav__link">Franquicias</a>
                </li>
                <li className="nav__item">
                    <a onClick={navToggle} href="#contacto" className="nav__link">Contacto</a>
                </li>
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}



