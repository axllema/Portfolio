import { useContext} from 'react';
import { LanguageContext } from '../pages/Homepage';
import MenuTranslations from '../translation/MenuTranslations';
// import { LanguageContext } from '../pages/Homepage';
import '../scss/style.scss';

const setHash = (hash) => {
    window.document.location.hash = hash;
}

function Menu() {
    const { language } = useContext(LanguageContext);
    
    const translations = MenuTranslations[language];

    const handleClick = (hash) => {
        setHash(hash);
    };

    return (
        <ul className="main-nav-anchor">
            <li className="about-item">
                <a href="#about" onClick={() => handleClick("#about")}>{translations.about || "À propos"}</a>
            </li>
            <li>
                <a href="#skills" onClick={() => handleClick("#skills")}>{translations.skills || "Compétences"}</a>
            </li>
            <li>
                <a href="#projects" onClick={() => handleClick("#projects")}>{translations.projects || "Projets"}</a>
            </li>
            <li>
                <a href="#contact" onClick={() => handleClick("#contact")}>{translations.contact || "Contact"}</a>
            </li>
        </ul>
    );
}

export default Menu;
