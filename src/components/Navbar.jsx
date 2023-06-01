import logo from '../img/logo.svg'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img src={logo} alt="" className='logo' />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler"><i className="bi bi-list"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white active" href="#nosotros">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#servicios">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#franquicias">Franquicias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
