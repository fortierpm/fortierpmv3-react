import { useRef, useEffect, useState } from "react";

import CarouselSlide from "./CarouselSlide";

const BriefCarousel = ({ page, seriesList, seriesPathsList, slideIDList, thumbPaths }) => {

    const sliderRef = useRef(null);
    const [sliderPos, setSliderPos] = useState(0);

    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }
    let pageCamel = camelize(page);

    // useEffect(() => {
    //     setSliderWidth(sliderRef.current.offsetWidth);
    //     console.log(sliderRef.current.offsetWidth);
    //     console.log(sliderRef);
    // }, []);

    useEffect(() => {
        const sliderWidth = sliderRef.current.offsetWidth;
        sliderRef.current.style.transform = `translateX(${((sliderWidth/3)*(-sliderPos))}px)`;
    }, [sliderPos]);

    const handleSlideLeft = () => {
        if (sliderPos <= 0) {
            return;
        }
        if (sliderRef !== null) {
            setSliderPos(sliderPos-1);
        }
    }
    const handleSlideRight = () => {
        if (sliderPos >= 2) {
            return;
        }
        if (sliderRef !== null) {
            setSliderPos(sliderPos+1);
        }
    }

    return (
        <div id={`${pageCamel}Carousel`} className="carousel">
            <div id={`${pageCamel}Slider`} className="carousel-slider" ref={sliderRef}>
                {seriesPathsList.map(series => {
                    let idx = seriesPathsList.indexOf(series);
                    return (
                        <CarouselSlide
                            key={idx}
                            page={page}
                            seriesPath={seriesPathsList[idx]}
                            slideID={slideIDList[idx]}
                            thumbPaths={thumbPaths}
                            series={seriesList[idx]}
                        />
                    )
                })}
            </div>
            <div 
                id={`${page}SlideLeft`}
                className="slide-left"
                style={{ pointerEvents: sliderPos <= 0 ? "none" : "", color: sliderPos <= 0 ? "rgb(121, 121, 121)" : "" }}
                onClick={handleSlideLeft}
            >
                <div><i className="fas fa-chevron-left fa-2x"></i></div>
            </div>
            <div
                id={`${page}SlideRight`}
                className="slide-right"
                style={{ pointerEvents: sliderPos >= 2 ? "none" : "", color: sliderPos >= 2 ? "rgb(121, 121, 121)" : "" }}
                onClick={handleSlideRight}
            >
                <div><i className="fas fa-chevron-right fa-2x"></i></div>
            </div>
        </div>
    );
}

export default BriefCarousel;