// import * as React from 'react';
// import { Link } from "react-router-dom"
import Logo from '../components/logo';
// import NavIcons from '../components/navIcons';
import '../scss/layout/_footer.scss';
import '../scss/style.scss';

function Footer() {
    return (
        <nav className="footer">
        <Logo className="footer-logo" imageClassName="footer-logo-image" />
        </nav>
    );
}

export default Footer;


