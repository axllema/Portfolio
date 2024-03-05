import ArgentBank from '../assets/mockups/argentbank.png';
import Kasa from '../assets/mockups/kasa.png';
import SophieBluel from '../assets/mockups/sophiebluel.png';
import NinaCarducci from '../assets/mockups/ninacarducci.png';
import OhMyFood from '../assets/mockups/ohmyfood.webp';

const projectsData = {
    fr: [
        {
            id: 1,
            title: "Ohmyfood",
            description: "Contribué au développement du site Ohmyfood, une plateforme de réservation de menus gastronomiques à Paris. Création d'une expérience utilisateur fluide et réactive en utilisant des maquettes fournies et des animations CSS pour des interactions dynamiques.",
            skills: ["Intégration mobile-first", "SASS", "Animations", "Github"],
            link: "https://github.com/axllema/Ohmyfood",
            image: OhMyFood
        },
        {
            id: 2,
            title: "Booki",
            description: "Contribué au développement du site web Booki en tant que développeur front-end. Responsable de l'intégration de l'interface utilisateur en collaboration avec l'UI designer et la CTO. Tâches comprenant l'intégration des maquettes desktop, tablette et mobile, ainsi que la mise en place du code HTML et CSS conforme aux spécifications techniques.",
            skills: ["HTML", "CSS"],
            link: "https://github.com/axllema/Booki"
        },
        {
            id: 3,
            title: "Print-it",
            description: "Travaillé sur le projet Print-it, une mission de développement JavaScript visant à améliorer le site Internet d'une imprimerie familiale. Implémentation d'un carrousel interactif en JavaScript, avec ajout progressif de fonctionnalités telles que la navigation, les points indicateurs et le défilement infini.",
            skills: ["JavaScript", "DOM"],
            link: "https://github.com/axllema/Print-it"
        },
        {
            id: 4,
            title: "Sophie Bluel",
            description: "Contribué au développement du site portfolio d'une architecte d'intérieur en tant que développeur front-end. Tâches incluant la création de la page de présentation des travaux, de la page de connexion de l'administrateur et de la modale d'upload de médias.",
            skills: ["Javascript", "React", "DOM", "Récupération de données de formulaire"],
            link: "https://github.com/axllema/ArchiWebos",
            image: SophieBluel
        },
        {
            id: 5,
            title: "Nina Carducci",
            description: "Fourni des services d'optimisation SEO à un photographe confronté à des problèmes de performance et de classement sur son site web. Audit complet du site réalisé, avec des solutions proposées pour améliorer la vitesse de chargement, le classement dans les moteurs de recherche et l'accessibilité.",
            skills: ["Optimisation de la performance du site web", "SEO", "Accessibilité"],
            link: "https://github.com/axllema/P9-Nina_Carducci",
            image: NinaCarducci
        },
        {
            id: 6,
            title: "Kasa",
            description: "Refonte du site web de Kasa, une entreprise de location d'appartements entre particuliers. Responsable du développement de l'application en utilisant React pour le front-end et des données extraites des annonces de logements fournies.",
            skills: ["React", "Vite", "Javascript", "SASS"],
            link: "https://github.com/axllema/Kasa",
            image: Kasa
        },
        {
            id: 7,
            title: "724events",
            description: "Finalisé l'intégration du nouveau site vitrine de l'agence événementielle 724events en tant que développeur front-end freelance. Analyse du code existant, correction des bugs identifiés et finalisation du cahier de recette pour garantir la qualité du site.",
            skills: ["Débogage", "Cahier de recettes"],
            link: "https://github.com/axllema/724events"
        },
        {
            id: 8,
            title: "ArgentBank",
            description: "Responsable de la configuration du tableau de bord utilisateur pour notre nouvelle application web React chez ArgentBank. Collaboration avec Mila, la cheffe de projet, pour répondre aux exigences fixées par Avery et terminer les tâches dans les délais impartis.",
            skills: ["React", "Redux", "Green Code", "Appels API", "MongoDB", "SASS", "Javascript"],
            link: "https://github.com/axllema/724events",
            image: ArgentBank
        }
    ],
    en: [
        {
            id: 1,
            title: "Ohmyfood",
            description: "Contributed to the development of the Ohmyfood website, a platform for booking gourmet menus in Paris. Created a smooth and responsive user experience using provided mockups and CSS animations for dynamic interactions.",
            skills: ["Mobile-first integration", "SASS", "Animations", "Github"],
            link: "https://github.com/axllema/Ohmyfood",
            image: OhMyFood
        },
        {
            id: 2,
            title: "Booki",
            description: "Contributed to the development of the Booki website as a front-end developer. Responsible for integrating the user interface in collaboration with the UI designer and the CTO. Tasks included integrating desktop, tablet, and mobile mockups, as well as implementing HTML and CSS code according to technical specifications.",
            skills: ["HTML", "CSS"],
            link: "https://github.com/axllema/Booki"
        },
        {
            id: 3,
            title: "Print-it",
            description: "Worked on the Print-it project, a JavaScript development mission to improve the website of a family printing company. Implemented an interactive carousel in JavaScript, with progressive addition of features such as navigation, indicator points, and infinite scrolling.",
            skills: ["JavaScript", "DOM"],
            link: "https://github.com/axllema/Print-it",
        },
        {
            id: 4,
            title: "Sophie Bluel",
            description: "Contributed to the development of the interior designer's portfolio website as a front-end developer. Tasks included creating the work presentation page, the administrator login page, and the media upload modal.",
            skills: ["Javascript", "React", "DOM", "Form data retrieval"],
            link: "https://github.com/axllema/ArchiWebos",
            image: SophieBluel
        },
        {
            id: 5,
            title: "Nina Carducci",
            description: "Provided SEO optimization services to a photographer facing performance and ranking issues on their website. Conducted a comprehensive site audit, with proposed solutions to improve loading speed, search engine ranking, and accessibility.",
            skills: ["Website performance optimization", "SEO", "Accessibility"],
            link: "https://github.com/axllema/P9-Nina_Carducci",
            image: NinaCarducci
        },
    {
        id: 6,
        title: "Kasa",
        description: "Redesigned the Kasa website, a company specializing in peer-to-peer apartment rentals. Responsible for developing the application using React for the front-end and data extracted from the provided housing listings.",
        skills: ["React", "Vite", "Javascript", "SASS"],
        link: "https://github.com/axllema/Kasa",
        image: Kasa
    },
    {
        id: 7,
        title: "724events",
        description: "Finalized the integration of the new showcase website for the freelance event agency 724events as a front-end developer. Analyzed existing code, fixed identified bugs, and finalized the recipe book to ensure site quality.",
        skills: ["Debugging", "Recipe book"],
        link: "https://github.com/axllema/724events",
    },
    {
        id: 8,
        title: "ArgentBank",
        description: "Responsible for configuring the user dashboard for our new React web application at ArgentBank. Collaborated with Mila, the project manager, to meet requirements set by Avery and complete tasks within deadlines.",
        skills: ["React", "Redux", "Green Code", "API calls", "MongoDB", "SASS", "Javascript"],
        link: "https://github.com/axllema/ArgentBank",
        image: ArgentBank
    }
    ]
};

export default projectsData;