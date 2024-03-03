import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/_projects.scss';
import '../scss/style.scss';

function Projects() {
    const projectsData = [
        {
            id: 1,
            title: "Booki",
            description: "Une courte description du projet.",
            skills: ["Compétence 1", "Compétence 2"],
            link: "https://github.com/axllema/Booki",
            image: "https://images.ctfassets.net/denf86kkcx7r/6roIBf4MbtVmoxmZs8Tgle/9bd50cd891601d6a92a57a71ebd4222c/vision_du_chat" 
        },
        {
            id: 2,
            title: "Sophie Bluel",
            description: "Une courte description du projet.",
            skills: ["Compétence 3", "Compétence 4"],
            link: "https://github.com/axllema/ArchiWebos",
            image: "https://media.istockphoto.com/id/1069546882/fr/photo/maine-coon-isol%C3%A9-sur-blanc.jpg?s=612x612&w=0&k=20&c=psI6AC9JMlYyTOp89xOqb7lvObBrXteR6K-2GqRuroI="
        },
        {
            id: 3,
            title: "Nina Carducci",
            description: "Une courte description du projet.",
            skills: ["Compétence 3", "Compétence 4"],
            link: "https://github.com/axllema/P9-Nina_Carducci",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Chat_roux_%C3%A0_pelage_court..jpg/300px-Chat_roux_%C3%A0_pelage_court..jpg" 
        },
        {
            id: 4,
            title: "Kasa",
            description: "Une courte description du projet.",
            skills: ["Compétence 3", "Compétence 4"],
            link: "https://github.com/axllema/Kasa",
            image: "https://assets-global.website-files.com/63496334a76f0305c5e819f0/63e006876af00b69ba598d57_chat%20europeen.webp" 
        }
    ];

    const [overlayData, setOverlayData] = useState(null);

    const handleImageClick = (project) => {
        if (overlayData && overlayData.id === project.id) {
            handleCloseOverlay();
        } else {
            setOverlayData(project);
        }
    };

    const handleCloseOverlay = () => {
        setOverlayData(null);
    };

    return (
        <section id="projects">
            <h2 className="projects-title"> Projets </h2>

            <div className="projects-container">
            {projectsData.map(project => (
                <div key={project.id} className="project-item">
                    <Link to={`/project/${project.id}`} className="project-link">
                        <h3>{project.title}</h3>
                    </Link>
                    <div className="image-container">
                        <img src={project.image} alt={project.title} className="project-image" onClick={() => handleImageClick(project)} />
                        {overlayData && overlayData.id === project.id && (
                            <div className="overlay" onClick={handleCloseOverlay}>
                                <div className="overlay-content">
                                    <p>{project.description}</p>
                                    <p>Compétences : {project.skills.join(", ")}</p>
                                    <div className="projects-links">
                                        <a href={project.link}>Github</a>
                                        <Link to={`/project/${project.id}`} className="view-details-link">Voir +</Link>
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