// import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { LanguageContext } from '../pages/Homepage';
import profileIcon from '../assets/profile_icon.webp';
import mailIcon from '../assets/email_icon.webp';
import phoneIcon from '../assets/phone_icon.webp';
import ContactTranslations from '../translation/ContactTranslations';
import '../scss/components/_contact.scss';
import '../scss/style.scss';
function Contact() {
    const { language } = useContext(LanguageContext);
    const translations = ContactTranslations[language];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://axellemaole-portfolio.netlify.app/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formData).toString()
            });
            if (response.ok) {
                console.log('Form submitted successfully!');
                // Ajoutez ici votre logique de traitement après la soumission du formulaire
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div id="contact">
            <h2 className="contact-title">{translations.title || "Contact"}</h2>
            <div className="form_infos-container">

                
            <section className="contact_form" >
                    <h2 className="contact_form-title">{translations.contactTitle || "Contactez-moi"}</h2>
                    <div className="contact_form-content">
                    <form className="contact_form-content-container" name="contact" onSubmit={handleFormSubmit} data-netlify="">

                            <div className="contact_form-content-container-input">
                                <label htmlFor="name"></label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder={translations.namePlaceholder || "Nom"} required="" autoComplete="name"/>
                            </div>

                            <div className="contact_form-content-container-input">
                                <label htmlFor="email"></label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder={translations.emailPlaceholder || "Email"} required="" autoComplete="email" />
                            </div>

                            <div className="contact_form-content-container-input">
                                <label htmlFor="subject"></label>
                                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} placeholder={translations.subjectPlaceholder || "Sujet"} required="" />
                            </div>

                            <div className="contact_form-content-container-input text">
                                <label htmlFor="message"></label>
                                <textarea name="message" id="message" value={formData.message} onChange={handleChange} cols="30" rows="10" placeholder={translations.messagePlaceholder || "Votre message ..."} required=""></textarea>
                            </div>

                            <input className="contact_form-content-container-button" type="submit" value={translations.sendButton || "Envoyer"} />
                        </form>
                    </div>
                </section>

                <div className="contact-infos">
                    <div className="contact-infos-name">
                        <img src={profileIcon} className="contact-infos-icon" alt={translations.userIconAlt || "icon user person"} />
                        <p className="contact-infos-text"> Axelle Maolé </p>
                    </div>
                    <div className="contact-infos-number">
                        <img src={phoneIcon} className="contact-infos-icon" alt={translations.phoneIconAlt || "icon phone"} />
                        <a href="tel:+33649314974" className="contact-infos-text">+336 49 31 49 74</a>
                    </div>
                    <div className="contact-infos-mail">
                        <img src={mailIcon} className="contact-infos-icon" alt={translations.mailIconAlt || "icon mail"} />
                        <a href="mailto:axellexm@gmail.com" className="contact-infos-text">axellexm@gmail.com</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;