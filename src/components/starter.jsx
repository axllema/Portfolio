import { useContext } from 'react';
// import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import photoDev from '../assets/photo_pro.png';
import cvFile from '../assets/CV-Axelle_Maolé.pdf';
import downloadIcon from '../assets/download_icon.png';
import { LanguageContext } from '../pages/Homepage';
import StarterTranslations from '../translation/StarterTranslation';
import '../scss/components/_starter.scss'
import '../scss/style.scss'

function Starter() {
    const { language } = useContext(LanguageContext);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'CV-Axelle_Maolé.pdf'; // nom du fichier à télécharger
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="starter">

            <div>
                <img
                    src={photoDev}
                    alt={StarterTranslations[language].starter_portrait_alt}
                    loading="eager"
                    className='photo-dev'
                />
            </div>
            
            <div className="about-me">
            <h2 className="about-me-title">{StarterTranslations[language].starter_hello || "Bonjour, je suis Axelle" }</h2>
            <p className="about-me-content">{StarterTranslations[language].starter_role || "Développeuse Front-end / Intégratrice Web"}</p>

                
                <button className="about-me-button" onClick={handleDownload}>
                    <img src={downloadIcon} alt={StarterTranslations[language].starter_download_alt || "Télécharger" } className="about-me-button-download_icon" />
                    {StarterTranslations[language].starter_cv_button}
                </button>
            </div>
        </section>
    );
}

export default Starter;

Starter.propTypes = {
    language: PropTypes.string,
};
