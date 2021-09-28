import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";
import settingReducer from "./settingReducer";

const rootReducer = combineReducers({
    taskReducer,
    userReducer,
    settingReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
