import React,{ useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarritoContext } from '../context/CarritoContext';

const Navbar = () => {
    
    const token = false;
    const {totalCarrito} = useContext(CarritoContext);
    const total = totalCarrito;
    const formattedTotal = total.toLocaleString('es-ES');

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid bg-danger">
                <Link className="navbar-brand" to="/">¡Pizzería El Sabor de Luis!</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-start">
                    <li className="nav-item">
                        <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to={token ? "/profile" : "/login"}>{token ? "Profile" : "Login"}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to={token ? "/logout" : "/register"}>{token ? "Logout" : "Register"}</Link>
                    </li>
                    <li className="nav-item ms-auto">
                        <Link className="nav-link text-white" aria-disabled="true" to="/cart"><FontAwesomeIcon icon={faCartShopping} /> Total: ${formattedTotal}</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;