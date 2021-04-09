// IMPORT FROM REACT
import { useState, useEffect } from "react";

// IMPORT IMAGES
import bluejayBackground from "../img/home-img/BluejayBackground.jpg";
import bluejayForeground from "../img/home-img/BluejayForeground.png";


//! "web design" contains (and requires for intended appearance) 
//! a hard en space; use hard en for all phrase spaces
const phrases = ["photography", "web design", "graphics"];
let phraseIndex = 0; // = first phrase
let letterIndex = 0; // = first letter
let currentText = "";
let letters = "";

const Intro = () => {

    //* Parallax function
    function parallax(element, distance, speed) {
        const item = document.querySelector(element);
        item.style.transform = `translateY(${distance * speed}px)`;
    }
    window.addEventListener("scroll", () => {
        parallax(".foreground", window.scrollY, -1.3);
        parallax(".background", window.scrollY, -0.1);
        parallax(".intro-text", window.scrollY, -0.78);
    });

    //* Typing Function
    const [typedText, setTypedText] = useState("");
    useEffect(() => {
        const repeat = setInterval(() => {
            if (phraseIndex === phrases.length) {
                phraseIndex = 0; // reset counter
            }

            currentText = phrases[phraseIndex];
            letters = currentText.slice(0, ++letterIndex); // assigns first (0) to [letterIndex] value letters

            if (letters.length === currentText.length) {
                phraseIndex++; // next phrase
                letterIndex = 0; // reset index
            }

            setTypedText(letters)
        }, 350);
        return () => clearInterval(repeat);
    }, [typedText]); // runs when typedText updates

    //* Hide Intro Page Items on Scroll
    const [scrollState, setScrollState] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 10) {
            setScrollState(true);
        } else {
            setScrollState(false);
        }
    });


    //* RENDERED INTRO
    return (
        <section className="intro">
            <div className="intro-text">
                <div>
                    <h1>Hey<br />I'm Peter.</h1>
                    <h3>I do</h3>
                </div>
                <div className="typing-container">
                    <div className="typing">{typedText}</div>
                </div>
            </div>
            <div className={`scroll-down ${scrollState ? "scroll-hidden-left" : ""}`}><i className="fas fa-arrow-down"></i>Scroll Down</div>
            <img className="background" src={bluejayBackground} alt="Unfocused background foliage" />
            <img className="foreground" src={bluejayForeground} alt="Bluejay peaking back towards camera" />
        </section>
    )
}

export default Intro;