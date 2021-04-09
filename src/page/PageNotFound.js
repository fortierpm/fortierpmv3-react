import {Link} from "react-router-dom";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

const PageNotFound = () => {
    return (
        <div className="page-404">
            <Nav />
            <div className="error-section">
                <div className="error-title">404 Error</div>
                <div className="error-message">The page you are looking for was not found.</div>
                <Link className="home-btn" to="/" >Homepage</Link>
            </div>
            <Footer />
        </div>
    )
}

export default PageNotFound;