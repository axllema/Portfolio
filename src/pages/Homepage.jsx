// import { Link } from "react-router-dom"
import { useState, createContext } from 'react';
import Header from '../components/header';
import Starter from '../components/starter';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';
// import '../scss/pages/_home.scss'
// import '../scss/style.scss'

export const LanguageContext = createContext();

function Home() {
    const [language, setLanguage] = useState('fr');

    const toggleLanguage = () => {
        setLanguage(language === 'fr' ? 'en' : 'fr');
    };

    return (

        <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <div>
            <Header/>

            <button onClick={toggleLanguage} className="language-button">
                    {language === 'fr' ? 'Switch to English' : 'Passer en Français'}
            </button>

            <div>
                <Starter />
                <About id="about" />
                <Skills id="skills"/>
                <Projects id="projects"/>
                <Contact id="contact"/>

            </div>
            <Footer/>
        </div>
        </LanguageContext.Provider>
    );
}

export default Home;
