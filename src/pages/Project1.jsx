// import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
// import '../scss/pages/_home.scss'
import '../scss/components/_project-solo.scss';

function Project1() {
    return (
        <div className="projet" id="projet1">
            <Header />

            <span className="en_attendant-2">
            - une courte description de votre réalisation ;
            </span>
            <span className="en_attendant-2">
            - les compétences qu’il vous a permis de développer ;
            </span>
            <span className="en_attendant-2">
            - un lien vers le code ou le site (sur GitHub, par exemple). 
            </span>

            <Footer />
        </div>
    );
}

export default Project1;