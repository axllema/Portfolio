// import React from 'react'; 
// import { Link } from "react-router-dom"
import photoDev from '../assets/photo_pro.png';
import cvFile from '../assets/CV-Axelle_Maolé.pdf';
import downloadIcon from '../assets/download_icon.png';
import '../scss/components/_starter.scss'
import '../scss/style.scss'

function Starter() {

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
                    alt="Portrait d'Axelle Maolé, la développeuse."
                    loading="eager"
                    className='photo-dev'
                />
            </div>
            
            <div className="about-me">
                <h2 className="about-me-title"> Bonjour, je suis Axelle</h2>
                <p className="about-me-content">
                    Développeuse Front-end / Intégratrice Web
                </p>
                
                <button className="about-me-button" onClick={handleDownload}>
                    <img src={downloadIcon} alt="Télécharger" className="about-me-button-download_icon" />
                    CV
                </button>
            </div>
        </section>
    );
}
export default Starter;
