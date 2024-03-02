// import * as React from 'react';
// import { Link } from "react-router-dom"
import Logo from '../components/logo';
import NavIcons from '../components/navIcons';
import '../scss/layout/_footer.scss';
import '../scss/style.scss';

function Footer() {
    return (
        <nav className="footer">
            <div className="footer-items">
                <NavIcons className="footer-icons" imageClassName="footer-icons-logo"/>
                <Logo className="footer-items-logo" imageClassName="footer-items-logo-image" />
            </div>
        </nav>
    );
}

export default Footer;