import { useSelector } from "react-redux";
import { AiFillGoogleCircle } from "react-icons/ai";
import { RootState } from "../../reducers";
import "./googleIcon.css";

const GoogleIcon = () => {
    const user = useSelector((state: RootState) => state.userReducer);
    return (
        <div className="justify-content-center">
            {!user ? (
                <a
                    href="http://localhost:5000/auth/google"
                    style={{ color: "grey" }}
                    className="nav-link"
                >
                    <AiFillGoogleCircle
                        cursor="pointer"
                        size="1.7em"
                        color="white"
                    />
                    Sign in with Google
                </a>
            ) : (
                <a
                    className="nav-link border border-secondary rounded text-white-50"
                    href="http://localhost:5000/api/users/logout"
                    style={{ color: "grey" }}
                >
                    Logout
                </a>
            )}
        </div>
    );
};

export default GoogleIcon;
