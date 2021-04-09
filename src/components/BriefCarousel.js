import CarouselSlide from "./CarouselSlide";

const BriefCarousel = ({ page, seriesList, seriesPathsList, slideIDList, thumbPaths }) => {

    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }
    let pageCamel = camelize(page);

    return (
        <div id={`${pageCamel}Carousel`} className="carousel">
            <div id={`${pageCamel}Slider`} className="carousel-slider">
                {seriesPathsList.map(series => {
                    let idx = seriesPathsList.indexOf(series);
                    return (
                        <CarouselSlide
                            page={page}
                            seriesPath={seriesPathsList[idx]}
                            slideID={slideIDList[idx]}
                            thumbPaths={thumbPaths}
                            series={seriesList[idx]}
                        />
                    )
                })}
            </div>
            <div id={`${page}SlideLeft`} className="slide-left">
                <div><i className="fas fa-chevron-left fa-2x inactive"></i></div>
            </div>
            <div id={`${page}SlideRight`} className="slide-right">
                <div><i className="fas fa-chevron-right fa-2x"></i></div>
            </div>
        </div>
    )
}

export default BriefCarousel;