// import React from 'react';
import PropTypes from 'prop-types';
import githubLogo from '../assets/github_logo.png';
import linkedinLogo from '../assets/linkedin_logo.png';
import '../scss/style.scss';

function NavIcons({ className, imageClassName }) {
    return (
        <section className={`main-nav-item ${className}`}>
            <a href="https://github.com/axllema/" aria-label="lien Github">
                <img src={githubLogo} alt="logo de Github" className={`main-nav-item-logo ${imageClassName}`}/>
            </a>
            <a href="https://www.linkedin.com/in/axelle-maol%C3%A9-02173614a/" aria-label="lien Linkedin">
                <img src={linkedinLogo} alt="logo de Linkedin" className={`main-nav-item-logo ${imageClassName}`}/>
            </a> 
        </section>
    );
}

export default NavIcons;

NavIcons.propTypes = {
    className: PropTypes.string,
    imageClassName: PropTypes.string
};