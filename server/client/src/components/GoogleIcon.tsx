import { useSelector } from "react-redux";
import { AiFillGoogleCircle } from "react-icons/ai";
import { RootState } from "../reducers";

const GoogleIcon = () => {
    const user = useSelector((state: RootState) => state.userReducer);
    return (
        <div className="nav-link">
            {!user ? (
                <a
                    href="http://localhost:5000/auth/google"
                    style={{ color: "grey" }}
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
