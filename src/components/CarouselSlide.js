import { useState } from "react";
import { Link } from "react-router-dom";

//import image from "../img/home-img/thumb/CosmosSeries002WaveThumb.jpg"

const CarouselSlide = ({ page, seriesPath, slideID, thumbPaths, series }) => {
    return (
        <div className="carousel-slide">
                <div className="slide-grid" id={slideID}>
                    {thumbPaths[seriesPath].map((img, i) => {
                        return (
                            <div className="slide-space"> {/* Needed for Safari accessibility; in order for height to be used, the parent needs to have defined value (flex is accpetable) */}
                                <img src={img} alt="Thumbnail for example piece" key={i}/>
                            </div>
                        );
                    })}
                </div>
            <h4 className="slide-title"><Link className="slide-link" to={`/${page}/${seriesPath}`}>{series}</Link></h4>
        </div>
    )
}

export default CarouselSlide;