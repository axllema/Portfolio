import { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { LanguageContext } from '../pages/Homepage';
import projectsData from '../data/projectsData';
import githubLogo from '../assets/github_logo.webp';
import '../scss/components/_projects.scss';
import '../scss/style.scss';

function Projects() {
    const { language } = useContext(LanguageContext);
    const currentProjects = projectsData[language];

    return (
        <section id="projects">
            <h2 className="projects-title"> Projets </h2>
            <div className="projects-container">
                {currentProjects.map((project) => (
                    <div key={project.id} className="project-item">
                        <h3 className="project-item-title">{project.title}</h3>
                        <div className="image-container">
                            <img src={project.image} alt={project.title} className="project-image" loading="lazy"/>
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-skills">
                            {project.skills.map((skill, index) => (
                                <span key={index} className="skill-button">{skill}</span>
                            ))}
                        </div>
                        <div className="projects-links">
                            <a href={project.link}>
                                <img src={githubLogo} alt="GitHub" aria-label="Lien Github" className="projects-link-github" />
                            </a>
                            <a href="" className="project-link-viewmore">Voir +</a>
                            {/* <Link to={`/project/${project.id}`} className="view-details-link">Voir +</Link> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;