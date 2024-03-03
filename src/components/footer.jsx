// import * as React from 'react';
// import { Link } from "react-router-dom"
// mettre navicons footer , pour git & linkedin qd meme
import Logo from '../components/logo';
import FooterIcons from '../components/footericons';
import '../scss/layout/_footer.scss';
import '../scss/style.scss';

function Footer() {
    return (
        <nav className="footer">
            <div className="footer-items">
                <FooterIcons />
                <Logo className="footer-items-logo" imageClassName="footer-items-logo-image" />
            </div>
        </nav>
    );
}

export default Footer;