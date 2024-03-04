import { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
import { LanguageContext } from '../pages/Homepage';
import projectsData from '../data/projectsData';
import '../scss/components/_projects.scss';
import '../scss/style.scss';

function Projects() {
    const { language } = useContext(LanguageContext);
    const currentProjects = projectsData[language];

    // State pour les overlays de chaque projet
    const [overlayStates, setOverlayStates] = useState(currentProjects.map(() => false));

    const handleProjectClick = (index) => {
        // Inverser l'état de l'overlay pour le projet cliqué
        setOverlayStates(prevStates => prevStates.map((state, i) => i === index ? !state : false));
    };

    return (
        <section id="projects">
            <h2 className="projects-title"> Projets </h2>
            <div className="projects-container">
                {currentProjects.map((project, index) => (
                    <div key={project.id} className="project-item">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="image-container" onClick={() => handleProjectClick(index)}>
                            <img src={project.image} alt={project.title} className="project-image" />
                            {overlayStates[index] && (
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <p>{project.description}</p>
                                        <div className="projects-links">
                                            <a href={project.link}>Github</a>
                                            <a href="" className="view-details-link">Voir +</a>
                                            {/* <Link to={`/project/${project.id}`} className="view-details-link">Voir +</Link> */}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;