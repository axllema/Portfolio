// import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../pages/Homepage';
import profileIcon from '../assets/profile_icon.png';
import mailIcon from '../assets/email_icon.png';
import phoneIcon from '../assets/phone_icon.png';
import ContactTranslations from '../translation/ContactTranslations';
import '../scss/components/_contact.scss';
import '../scss/style.scss';

function Contact() {

    const { language } = useContext(LanguageContext);
    const translations = ContactTranslations[language];

    return (
        <div id="contact">

            <section className="contact_form">
                <h2 className="contact_form-title">{translations.title || "Contact"}</h2>
                <div className="contact_form-content">
                    <form className="contact_form-content-container">

                        <div className="contact_form-content-container-input">
                            <label htmlFor="name"></label>
                            <input type="text" name="name" id="name" placeholder={translations.namePlaceholder || "Nom"} required=""  autoComplete="name"/>
                        </div>

                        <div className="contact_form-content-container-input">
                            <label htmlFor="email"></label>
                            <input type="email" name="email" id="email" placeholder={translations.emailPlaceholder || "Email"} required="" autoComplete="email" />
                        </div>

                        <div className="contact_form-content-container-input">
                            <label htmlFor="subject"></label>
                            <input type="text" name="subject" id="subject" placeholder={translations.subjectPlaceholder || "Sujet"} required="" />
                        </div>

                        <div className="contact_form-content-container-input">
                            <label htmlFor="message"></label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder={translations.messagePlaceholder || "Votre message ..."} required=""></textarea>
                        </div>

                        <input className="contact_form-content-container-button" type="submit" value={translations.sendButton || "Envoyer"} />
                    </form>
                    </div>
                    </section>

                    <div className="contact-infos">
                        <div>
                            <img src={profileIcon} className="contact-infos-icon" alt={translations.userIconAlt || "icon user person"} />
                            <p className="contact-infos-text"> Axelle Maolé </p>
                        </div>
                        <div>
                            <img src={phoneIcon} className="contact-infos-icon" alt={translations.phoneIconAlt || "icon phone"} />
                            <a href="" className="contact-infos-text">+336 49 31 49 74</a>
                        </div>
                        <div>
                            <img src={mailIcon} className="contact-infos-icon" alt={translations.mailIconAlt || "icon mail"} />
                            <a href="" className="contact-infos-text">axellexm@gmail.com</a>
                        </div>
                    </div>
        </div>
    );
}

export default Contact;