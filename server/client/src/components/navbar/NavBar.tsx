import { Link } from "react-router-dom";
import Brand from "./Brand";
import GoogleIcon from "./GoogleIcon";
import SettingModal from "./SettingModal";

export const NavBar = () => {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-light"
                style={{ backgroundColor: "#30384b" }}
            >
                <div className="container-fluid">
                    <Brand />
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
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item border border-secondary rounded m-2">
                                <Link className="nav-link text-white-50" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item border border-secondary rounded m-2">
                                <SettingModal />
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
