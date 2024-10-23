import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/css/Navbar.css';

export const Navbar = () => {
    return (
        <nav className="nav-app navbar navbar-expand-sm w-100 px-4 py-3">
            <div className="me-3 d-flex justify-content-center align-items-center gap-2">
                <FontAwesomeIcon icon={faCompactDisc} className="fs-1" />
                <h5>Kodigo Music</h5>
            </div>

            {/* Botón para pantallas pequeñas */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                {/* Elementos de la barra de navegación */}
                <ul className="navbar-nav ms-auto pe-0 text-center">
                    <li className="nav-item active">
                        <Link className="nav-link fs-5 text-white" to='/'><strong>Home</strong></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-5 text-white" to='/signin'><strong>Sign In</strong></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
