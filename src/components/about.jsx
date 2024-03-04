// import React from 'react'; 
// import { Link } from "react-router-dom"
import { useContext } from 'react';
import { LanguageContext } from '../pages/Homepage';
import AboutTranslations from '../translation/AboutTranslations';

import Paris from '../assets/about/paris.webp';
import Diploma from '../assets/about/diploma2.webp';
import VideoGames from '../assets/about/videogames.webp';
import Coding from '../assets/about/coding.webp';

import '../scss/components/_about.scss'
import '../scss/style.scss'

function About() {
    const { language } = useContext(LanguageContext);

    const translations = AboutTranslations[language];

    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-container-title">
                    <h2 className="about-title-text">{translations.title || "À propos"}</h2>
                </div>

                <div className="about-list-container">
                    <ul className="hobbies-list">
                        <li className="hobbies-list-item">
                            <img src={Paris} className="hobbies-list-item-picture"
                            alt={translations.parisAlt || "Photo de Paris, la Tour Eiffel au loin."}
                            loading="eager"/>
                            <h3 className="hobbies-list-item-name">{translations.locationTitle || "Emplacement"}</h3>
                            <p className="hobbies-list-item-content">{translations.locationContent || "Je viens et j’habite en banlieue parisienne, à Champigny-sur-Marne."}</p>
                        </li>
                        <li className="hobbies-list-item">
                            <img src={Coding} className="hobbies-list-item-picture"
                            alt={translations.codingAlt || "Photo d'un ordinateur avec du code sur l'écran, et un carnet ouvert."}
                            loading="eager"/>
                            <h3 className="hobbies-list-item-name">{translations.experienceTitle || "Expérience"}</h3>
                            <p className="hobbies-list-item-content">{translations.experienceContent || "Un an d'expérience en tant que développeuse front-end / intégratrice autodidacte."}</p>
                        </li>
                        <li className="hobbies-list-item">
                            <img src={Diploma} className="hobbies-list-item-picture"
                            alt={translations.diplomaAlt || "Photo de chapeaux de diplômés lancés dans les airs."}
                            loading="eager"/>
                            <h3 className="hobbies-list-item-name">{translations.diplomaTitle || "Diplômes"}</h3>
                            <p className="hobbies-list-item-content">
                                {translations.diplomaContent || "Bachelor chef de projet digital (IIM)\nMastère Direction Artistique & Communication (Com'art)\nCertificat professionnelleDéveloppeur Informatique (OpenClassrooms)"}
                            </p>
                        </li>
                        <li className="hobbies-list-item">
                            <img src={VideoGames} className="hobbies-list-item-picture"
                            alt={translations.videoGamesAlt || "Photo d'une console switch, avec le jeu Zelda."} 
                            loading="eager"/>
                            <h3 className="hobbies-list-item-name">{translations.passionsTitle || "Passions"}</h3>
                            <p className="hobbies-list-item-content">{translations.passionsContent || "Intérêt particulier pour la pop culture, la musique (les concerts), la photographie, et les jeux vidéos."}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;