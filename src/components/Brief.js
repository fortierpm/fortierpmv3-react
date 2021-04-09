import BriefInfo from "./BriefInfo";
import BriefCarousel from "./BriefCarousel";

const Brief = ({ page, pageDetails, seriesList, seriesPathsList, slideIDList, thumbPaths }) => {

    function capitalize(str) {
        return str.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    }
    let capPage = capitalize(page);
    function dashify(str) {
        return str.replace(/\s/g , "-");
    }
    let dashPage = dashify(page);

    return (
        <section className={`${dashPage} brief`}>
            <BriefInfo
                page={page}
                capPage={capPage}
                pageDetails={pageDetails}
                seriesList={seriesList}
                seriesPathsList={seriesPathsList}
            />
            <BriefCarousel
                page={page}
                seriesList={seriesList}
                seriesPathsList={seriesPathsList}
                slideIDList={slideIDList}
                thumbPaths={thumbPaths}
            />
        </section>
    )
}

export default Brief;