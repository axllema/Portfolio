// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"
import logoProvi from '../assets/logo_provi.png';
import '../scss/style.scss';

function Logo({ className, imageClassName }) {
    return (
        <Link to="/" className={`main-nav-logo ${className}`}> 
            <img alt="logo provisoire" src={logoProvi} className={`main-nav-logo-image ${imageClassName}`}/>
            <h1 className="sr-only">Axelle Maolé</h1>
        </Link>
    );
}

Logo.propTypes = {
    className: PropTypes.string,
    imageClassName: PropTypes.string
};

export default Logo;