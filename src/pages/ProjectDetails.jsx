import { useParams } from 'react-router-dom';
// import Header from '../components/header';
import Footer from '../components/footer';
import projectsData from '../data/projectsData';

function ProjectDetails() {
    const { id } = useParams();

    const project = projectsData.find(project => project.id === parseInt(id));

    if (!project) {
        return <div>Projet non trouvé</div>;
    }



    return (
        <div className="project">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Compétences : {project.skills.join(', ')}</p>
            <a href={project.link}>Lien Github vers le projet</a>
            <Footer />
        </div>
    );
}

export default ProjectDetails;

/** Composant pour afficher les détails d'un projet spécifique.
     * Ce composant sera utilisé lorsque "Voir +" sera mis en place pour permettre 
     * l'affichage des caractéristiques du projet sélectionné.
        * Pour l'instant, il n'est pas utilisé.
 */