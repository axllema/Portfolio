import { useContext } from 'react';
import { LanguageContext } from '../pages/Homepage';
import SkillsTranslations from '../translation/SkillsTranslation';

import HTML from '../assets/skills/html-icon.webp';
import CSS from '../assets/skills/css-icon.webp';
import JAVASCRIPT from '../assets/skills/js-icon.webp';
import React from '../assets/skills/react-icon.webp';
import SASS from '../assets/skills/sass-icon.webp';
import Redux from '../assets/skills/redux-icon.webp';
import Github from '../assets/skills/github-icon.webp';
import Photoshop from '../assets/skills/photoshop-icon.webp';
import Illustrator from '../assets/skills/illustator-icon.webp';
import Indesign from '../assets/skills/indesign-icon.webp';
import XD from '../assets/skills/xd-icon.webp';

import '../scss/components/_skills.scss';
import '../scss/style.scss';

function Skills() {
    const { language } = useContext(LanguageContext);

    const developerSkills = [
        { icon: HTML, name: "HTML 5" },
        { icon: CSS, name: "CSS 3" },
        { icon: JAVASCRIPT, name: "JavaScript" },
        { icon: React, name: "React" },
        { icon: SASS, name: "SASS" },
        { icon: Redux, name: "Redux" },
        { icon: Github, name: "Github" }
    ];

    const designerSkills = [
        { icon: Photoshop, name: "Photoshop" },
        { icon: Illustrator, name: "Illustrator" },
        { icon: Indesign, name: "Indesign" },
        { icon: XD, name: "Adobe XD" }
    ];

    return (
        <section className="skills" id="skills">
        <div className="skills-container">
            <div className="skills-title">
                <h2 className="skills-title-text">{SkillsTranslations[language].skills.title || "Compétences"}</h2>
            </div>
            <div className="skills-list-container">

                <div className="skills-list">
                            <ul className="skills-list-dev">
                                {developerSkills.map((skill, index) => (
                                    <li className="skills-list-item" key={index}>
                                        <img src={skill.icon} className="skills-list-item-icon"
                                        alt={skill.name} loading="lazy"/>
                                        <p className="skills-list-item-name">{skill.name}</p>
                                    </li>
                                ))}
                            </ul>

                        <div className="skills-list">
                            <ul className="skills-list-design">
                                {designerSkills.map((skill, index) => (
                                    <li className="skills-list-item" key={index}>
                                        <img src={skill.icon} className="skills-list-item-icon"
                                        alt={skill.name} loading="lazy" />
                                        <p className="skills-list-item-name">{skill.name}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;