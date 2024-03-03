// import * as React from 'react';
// import { Link } from "react-router-dom"
import Logo from '../components/logo';
// mettre navicons footer , pour git & linkedin qd meme
import '../scss/layout/_footer.scss';
import '../scss/style.scss';

function Footer() {
    return (
        <nav className="footer">
            <div className="footer-items">
                <Logo className="footer-items-logo" imageClassName="footer-items-logo-image" />
            </div>
        </nav>
    );
}

export default Footer;