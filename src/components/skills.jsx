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
import Swagger from '../assets/skills/swagger-icon.webp';

import '../scss/components/_skills.scss';
import '../scss/style.scss';

function Skills() {
    const { language } = useContext(LanguageContext);

    const developerSkills = [
        { icon: HTML, name: "HTML 5", alt: "HTML icon" },
        { icon: CSS, name: "CSS 3", alt: "CSS icon" },
        { icon: JAVASCRIPT, name: "JavaScript", alt: "Javascript icon" },
        { icon: React, name: "React", alt: "React icon" },
        { icon: SASS, name: "SASS", alt: "SASS icon" },
        { icon: Redux, name: "Redux", alt: "Redux icon" },
        { icon: Github, name: "Github", alt: "Github icon" },
        { icon: Swagger, name: "Swagger", alt: "Swagger icon" }
    ];

    const designerSkills = [
        { icon: Photoshop, name: "Photoshop", alt: "Photoshop icon" },
        { icon: Illustrator, name: "Illustrator", alt: "Illustrator icon" },
        { icon: Indesign, name: "Indesign", alt: "Indesign icon" },
        { icon: XD, name: "Adobe XD", alt: "Adobe XD icon" }
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
                                        alt={skill.alt} loading="lazy"/>
                                        <p className="skills-list-item-name">{skill.name}</p>
                                    </li>
                                ))}
                            </ul>

                        <div className="skills-list">
                            <ul className="skills-list-design">
                                {designerSkills.map((skill, index) => (
                                    <li className="skills-list-item" key={index}>
                                        <img src={skill.icon} className="skills-list-item-icon"
                                        alt={skill.alt} loading="lazy" />
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