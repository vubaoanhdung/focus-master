import { AnyAction } from "redux";
import { FETCH_USER } from "../actions/types";

const userReducer = (state = null, action: AnyAction) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
};

export default userReducer;
