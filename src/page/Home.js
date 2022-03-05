// IMPORT FROM REACT
import React, { useState, useEffect, useRef } from "react";

// IMPORT COMPONENTS
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import Brief from "../components/Brief"
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ShortTransition from "../components/ShortTransition";

// IMPORT IMGs
import thumbnailList from "../object-files/ThumbnailList";

// HOME COMPONENT
const Home = () => {

    const [contactHeight, setContactHeight] = useState(0)
    const contactRef = useRef(null);
    /*useEffect(() => {
        setContactHeight(ref.current.clientHeight);
    }); */
    /* const footerRef = useRef(null);
    const [footerWidth, setFooterWidth] = useState(0);
    useEffect(() => {
        setFooterWidth(footerRef.current.clientWidth);
    },[footerRef]); */

    return (
        <div className="homepage">
            <Intro />
            <Nav />
            <Brief
                page={"photos"}
                pageDetails={"Personal photography and raster image manipulation"}
                seriesList={["Greece and Italy Trip", "Northeast US Trip", "Tilt Shift Edits"]}
                seriesPathsList={["greece-italy-trip", "northeast-us-trip", "tilt-shift-edits"]}
                slideIDList={["greeceItaly", "eastTrip", "tiltShift"]}
                thumbPaths={thumbnailList[0]}
            />
            <ShortTransition num={1} />
            <Brief
                page={"graphics"}
                pageDetails={"Minimalist digital illustrations and vector compositions"}
                seriesList={["Cosmos Series", "Quiet Series", "Other Isometric Pieces"]}
                seriesPathsList={["cosmos-series", "quiet-series", "other-iso"]}
                slideIDList={["cosmosSeries", "quietSeries", "otherISO"]}
                thumbPaths={thumbnailList[1]}
            />
            <ShortTransition num={2} />
            <Brief
                page={"web projects"}
                pageDetails={"Completed code and web design projects"}
                seriesList={["HTML/CSS Projects", "JavaScript Projects", "React Projects"]}
                seriesPathsList={["htmlcss-projects", "javascript-projects", "react-projects"]}
                slideIDList={["htmlcssProjects", "jsProjects", "reactProjects"]}
                thumbPaths={thumbnailList[2]}
            />
            <ShortTransition num={3} />
            <Contact ref={contactRef} />
            <Footer />
        </div>
    )
}

export default Home;