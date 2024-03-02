// import { Link } from 'react-router-dom';
// import '../components/_projects.scss';
import profileIcon from '../assets/profile_icon.png';
// import HTML from '../assets/skills/html.png';
// import CSS from '../assets/skills/css.png';
// import JS from '../assets/skills/javascript.png';
// import React from '../assets/skills/react.png';
// import SASS from '../assets/skills/sass.png';
// import Redux from '../assets/skills/redux.png';
// import Github from '../assets/skills/github.png';
// import Photoshop from '../assets/skills/photoshop.png';
// import Illustrator from '../assets/skills/illustrator.png';
// import Indesign from '../assets/skills/indesign.png';
// import XD from '../assets/skills/adobe_xd.png';
import '../scss/components/_skills.scss';
import '../scss/style.scss';

function Skills() {
    return (
        <section className="skills" id="skills">
        <div className="skills-container">
            <div className="skills-title">
                <h2 className="skills-title-text">Skills</h2>
            </div>
            <div className="skills-list-container">
                <ul className="skills-list">
                    <li className="skills-list-item">
                        <img src={profileIcon}  className="try" alt="icon user person" />
                        <p className="skill-item-name">HTML 5</p>
                    </li>
                    <li className="skills-list-item">
                        <img src={profileIcon}  className="try" alt="icon user person" />
                        <p className="skill-item-name">CSS 3</p>
                    </li>
                    <li className="skills-list-item">
                        <img src={profileIcon}  className="try" alt="icon user person" />
                        <p className="skill-item-name">JavaScript</p>
                    </li>
                    <li className="skills-list-item">
                        <img src={profileIcon}  className="try" alt="icon user person" />
                        <p className="skill-item-name">React</p>
                    </li>
                    <li className="skills-list-item">
                        <p className="skill-item-name">SASS</p>
                    </li>
                    <li className="skills-list-item">
                        <p className="skill-item-name">Redux</p>
                    </li>
                    <li className="skills-list-item">
                        <p className="skill-item-name">Github</p>
                    </li>
                    <li className="skills-list-item">
                        <p className="skill-item-name">Adobe Photoshop</p>
                    </li>
                    <li className="skills-list-item">
                        <p className="skill-item-name">Adobe Illustrator</p>
                    </li>
                    <li className="skills-list-item">
                        <p className="skill-item-name">Adobe Indesign</p>
                    </li>
                    <li className="skills-list-item">
                        <p className="skill-item-name">Adobe XD</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
);
}

export default Skills;