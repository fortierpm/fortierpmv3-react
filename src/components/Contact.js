// IMPORT IMAGES
import contactImg from "../img/home-img/TiltShiftAcrocorinth.jpg";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <img className="contact-img" src={contactImg} alt="contact image" />
            <div className="contact-text">
                <h2 className="contact-title">Contact</h2>
                <div className="contact-cta">
                    <p>Find or message me on any of my accounts</p>
                    <a className="email-btn" href="mailto:fortierpm@gmail.com">
                        <i id="envelope" className="fas fa-envelope fa-2x"></i>
                        <i id="feather" className="fas fa-feather-alt fa-2x"></i>
                        <span>Email</span>
                    </a>
                </div>
                <ul className="contact-links">
                    <li className="github-link">
                        <a href="https://github.com/fortierpm" target="_blank">
                            <i className="fab fa-github fa-2x"></i>Github
                        </a>
                    </li>
                    <li className="fcc-link">
                        <a href="https://www.freecodecamp.org/fortierpm" target="_blank">
                            <i className="fab fa-free-code-camp fa-2x"></i>FreeCodeCamp
                        </a>
                    </li>
                    <li className="facebook-link">
                        <a href="https://www.facebook.com/people/Peter-Fortier/100010683600528" target="_blank">
                            <i className="fab fa-facebook fa-2x"></i>Facebook
                        </a>
                    </li>
                    <li className="twitter-link">
                        <a href="https://twitter.com/fortier_pm" target="_blank">
                            <i className="fab fa-twitter fa-2x"></i>Twitter
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Contact;