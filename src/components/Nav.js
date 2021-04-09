// IMPORT FROM REACT
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

// IMPORT IMAGES
import logo from "../img/icon/4tearsNoPadding.png";

const Nav = ({footerWidth}) => {

    //* Burger Open/Close
    const [burgerState, setBurgerState] = useState(false);
    const burgerHandler = () => setBurgerState(!burgerState);

    //* Hide Contact button
    /* Doesn't work atm
    const contact = document.querySelector(".contact");
    const footer = document.querySelector("footer");
    const contactJump = document.querySelector(".contact-jump");
    window.addEventListener("scroll", () => {
        let offsetLength = contact.scrollHeight + footer.scrollHeight + 500;
        if (window.scrollY >= (document.body.scrollHeight - offsetLength)) {
            contactJump.classList.add("scroll-hidden-right");
        } else {
            contactJump.classList.remove("scroll-hidden-right");
        }
    }); */


    return (
        <nav className="site-nav" id="siteNav">
            <div className="logo">
                <img className="logo-icon" src={logo} alt="peter fortier icon" />
                <div className="logo-text">Peter Fortier {footerWidth}</div>
            </div>
            <div onClick={burgerHandler} className={`hamburger ${burgerState ? "active-burger" : ""}`}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
            <ul className={`site-pages ${burgerState ? "active-site-pages" : ""}`}>
                <li className="site-page"><Link className="page-link" to="/">Home</Link></li>
                <li className="site-page"><Link className="page-link" to="/photos">Photos</Link></li>
                <li className="site-page"><Link className="page-link" to="/graphics">Graphics</Link></li>
                <li className="site-page"><Link className="page-link" to="/web-projects">Web Projects</Link></li>
            </ul>
            <a className={`contact-jump`} href="#contact"><i className="fas fa-paper-plane"></i>Contact</a>
        </nav>
    )
}

export default Nav;