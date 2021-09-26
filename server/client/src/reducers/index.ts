import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    taskReducer,
    userReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
