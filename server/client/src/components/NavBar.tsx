import { Link } from "react-router-dom";
import GoogleIcon from "../components/GoogleIcon";

export const NavBar = () => {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-light"
                style={{ backgroundColor: "#30384b" }}
            >
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        FocusMaster
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarTogglerDemo02"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <GoogleIcon />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
