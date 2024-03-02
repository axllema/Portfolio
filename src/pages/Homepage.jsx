// import React from 'react'; 
// import { Link } from "react-router-dom"
import Header from '../components/header';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Experience from '../components/experience';
import Contact from '../components/contact';
import Footer from '../components/footer';
// import '../scss/pages/_home.scss'
import '../scss/style.scss'

function Home() {
    return (
        <div>
            <Header/>
            <div>

                <About id="about" />
                <Skills id="skills"/>
                <Experience />
                <Projects id="projects"/>
                <Contact id="contact"/>

            </div>
            <Footer/>
        </div>
    );
}

export default Home;
