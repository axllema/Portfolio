// import { Link } from 'react-router-dom';
import profileIcon from '../assets/profile_icon.png';
import mailIcon from '../assets/email_icon.png';
import phoneIcon from '../assets/phone_icon.png';
import '../scss/components/_contact.scss';
import '../scss/style.scss';

function Contact() {
    return (
        <div className="contact_form" id="contact">
            <h2 className="contact_form-title">Contact</h2>
            <div className="contact_form-content">
                <form className="contact_form-content-container">

                    <div className="contact_form-content-container-input">
                        <label htmlFor="name"></label>
                        <input type="text" name="name" id="name" placeholder="Nom" required="" />
                    </div>

                    <div className="contact_form-content-container-input">
                        <label htmlFor="email"></label>
                        <input type="email" name="email" id="email" placeholder="Email" required="" />
                    </div>

                    <div className="contact_form-content-container-input">
                        <label htmlFor="subject"></label>
                        <input type="text" name="subject" id="subject" placeholder="Sujet" required="" />
                    </div>

                    <div className="contact_form-content-container-input">
                        <label htmlFor="message"></label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Votre message ..." required=""></textarea>
                    </div>

                    <input className="contact_form-content-container-button" type="submit" value="Envoyer" />
                </form>

                <div className="contact_form-content-infos">

                    <div>
                        <img src={profileIcon} className="contact_form-content-infos-icon" alt="icon user person" />
                        <p> Axelle Maolé </p>
                    </div>
                    <div>
                        <img src={phoneIcon} className="contact_form-content-infos-icon" alt="icon phone" />
                        <a href="">+336 49 31 49 74</a>
                    </div>
                    <div>
                        <img src={mailIcon} className="contact_form-content-infos-icon" alt="icon mail" />
                        <a href="">axellexm@gmail.com</a>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Contact;