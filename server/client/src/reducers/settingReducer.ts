import { AnyAction } from "redux";
import { CHANGE_SETTING } from "../actions/types";

export interface SettingState {
    pomodoro: number;
    break: number;
}

const initialState: SettingState = {
    pomodoro: 60,
    break: 10,
};

const settingReducer = (
    state: SettingState = initialState,
    action: AnyAction,
) => {
    switch (action.type) {
        case CHANGE_SETTING:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default settingReducer;
