
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Franquicias360</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white active" aria-current="page" href="#">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Franquicias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
