import logo from '../img/logo.svg'

export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img src={logo} alt="" className='logo' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler"><i className="bi bi-list"></i></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarToggleExternalContent">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#nosotros">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#servicios">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#franquicias">Franquicias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
