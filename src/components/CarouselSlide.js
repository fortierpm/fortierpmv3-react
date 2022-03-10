import { useState } from "react";
import { Link } from "react-router-dom";

//import image from "../img/home-img/thumb/CosmosSeries002WaveThumb.jpg"

const CarouselSlide = ({ page, seriesPath, slideID, thumbPaths, series }) => {
    return (
        <div className="carousel-slide">
<<<<<<< HEAD
            {/* <div className="safari-backup-grid"> FAILED */}
                <div className="slide-grid" id={slideID}>
                    {thumbPaths[seriesPath].map((img, i) => {
                        return (
                            <img src={img} alt="Thumbnail for example piece" key={i}/>
                        )
                    })}
                </div>
            {/* </div> */}
=======
            <div className="slide-grid" id={slideID}>
                {thumbPaths[seriesPath].map((img, i) => {
                    return (
                        <img src={img} alt="Thumbnail for example piece" key={i}/>
                    )
                })}
            </div>
>>>>>>> 5a7dd2c6cad947038fb8b810fcbd4bc23a8fa6a8
            <h4 className="slide-title"><Link className="slide-link" to={`/${page}/${seriesPath}`}>{series}</Link></h4>
        </div>
    )
}

export default CarouselSlide;