// import * as React from 'react';
import { Link } from "react-router-dom"
import logo from '../assets/logo_provi.png';
import '../scss/components/_header.scss';
import '../scss/style.scss';

function Header() {
    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo"> 
                <img alt="logo provisoire" src={logo} className="main-nav-logo-image"/>
                <h1 className="sr-only"> Axelle Maolé</h1>
            </Link>

            <section className="main-nav-item">
            </section>
        </nav>
    );
}

export default Header;
