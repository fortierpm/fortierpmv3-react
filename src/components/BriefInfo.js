import { Link } from "react-router-dom";

const BriefInfo = ({ page, capPage, pageDetails, seriesList, seriesPathsList }) => {
    return (
        <div className="section-info">
            <div className="section-heading">
                <h2>{capPage}</h2>
                <p>{pageDetails}</p>
            </div>
            <Link className="full-page-link" to={`/${page}`}><i className="fas fa-camera"></i>Full {capPage} Page</Link>
            <nav className="section-nav">
                <ul className="nav-links">
                    <li className="nav-link"><Link to={`/${page}/${seriesPathsList[0]}`}>{seriesList[0]}</Link></li>
                    <li className="nav-link"><Link to={`/${page}/${seriesPathsList[1]}`}>{seriesList[1]}</Link></li>
                    <li className="nav-link"><Link to={`/${page}/${seriesPathsList[2]}`}>{seriesList[2]}</Link></li>
                    <li className="nav-link">More...</li>
                </ul>
            </nav>
        </div>
    )
}

export default BriefInfo;