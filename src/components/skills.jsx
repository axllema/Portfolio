import { useContext } from 'react';
import { LanguageContext } from '../pages/Homepage';
import SkillsTranslations from '../translation/SkillsTranslation';

import HTML from '../assets/skills/html-icon.png';
import CSS from '../assets/skills/css-icon.png';
import JAVASCRIPT from '../assets/skills/js-icon.png';
import React from '../assets/skills/react-icon.png';
import SASS from '../assets/skills/sass-icon.png';
import Redux from '../assets/skills/redux-icon.png';
import Github from '../assets/skills/github-icon.png';
import Photoshop from '../assets/skills/photoshop-icon.png';
import Illustrator from '../assets/skills/illustator-icon.png';
import Indesign from '../assets/skills/indesign-icon.png';
import XD from '../assets/skills/xd-icon.png';

import '../scss/components/_skills.scss';
import '../scss/style.scss';

function Skills() {
    const { language } = useContext(LanguageContext);

    return (
        <section className="skills" id="skills">
        <div className="skills-container">
            <div className="skills-title">
                <h2 className="skills-title-text">{SkillsTranslations[language].skills.title || "Compétences"}</h2>
            </div>
            <div className="skills-list-container">
                <ul className="skills-list">
                    <li className="skills-list-item">
                        <img src={HTML}  className="skills-list-item-icon" alt="HTML5 icon" />
                        <p className="skills-list-item-name">HTML 5</p>
                    </li>
                    <li className="skills-list-item">
                        <img src={CSS}  className="skills-list-item-icon" alt="CSS3 icon" />
                        <p className="skills-list-item-name">CSS 3</p>
                    </li>
                    <li className="skills-list-item">
                        <img src={JAVASCRIPT}  className="skills-list-item-icon" alt="Javascript icon" />
                        <p className="skills-list-item-name">JavaScript</p>
                    </li>
                    <li className="skills-list-item">
                        <img src={React}  className="skills-list-item-icon" alt="React icon" />
                        <p className="skills-list-item-name">React</p>
                    </li>
                    <li className="skills-list-item">
                        <img src={SASS}  className="skills-list-item-icon" alt="SASS icon" />
                        <p className="skills-list-item-name">SASS</p>
                    </li>
                    <li className="skills-list-item">
                        <img src={Redux}  className="skills-list-item-icon" alt="Redux icon" />
                        <p className="skills-list-item-name">Redux</p>
                    </li>
                    <li className="skills-list-item">
                        <img src={Github}  className="skills-list-item-icon" alt="Github icon" />
                        <p className="skills-list-item-name">Github</p>
                    </li>
                    <li className="skills-list-item">
                        <img src={Photoshop}  className="skills-list-item-icon" alt="Photoshop icon" />
                        <p className="skills-list-item-name">Photoshop</p>
                    </li>
                    <li className="skills-list-item">
                        <img src={Illustrator}  className="skills-list-item-icon" alt="Illustrator icon" />
                        <p className="skills-list-item-name">Illustrator</p>
                    </li>
                    <li className="skills-list-item">
                        <img src={Indesign}  className="skills-list-item-icon" alt="Indesign icon" />
                        <p className="skills-list-item-name">Indesign</p>
                    </li>
                    <li className="skills-list-item">
                        <img src={XD}  className="skills-list-item-icon" alt="XD icon" />
                        <p className="skills-list-item-name">Adobe XD</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
);
}

export default Skills;