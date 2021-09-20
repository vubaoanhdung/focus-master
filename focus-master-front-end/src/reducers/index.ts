import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
    tasks: taskReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
