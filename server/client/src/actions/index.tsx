import axios from "axios";
import { Dispatch } from "redux";
import history from "../history";
import {
    FETCH_USER,
    FETCH_TASKS,
    DELETE_TASK,
    ADD_TASK,
    CHANGE_SETTING,
} from "./types";

// Task Actions

/*
    Add a new task
*/
export const addTask = (data: any) =>
    async function (dispatch: Dispatch) {
        await axios
            .post("/api/tasks", {
                data,
            })
            .then((response) =>
                dispatch({ type: ADD_TASK, payload: response.data }),
            )
            .catch((error) => console.log(error.message));
    };

/*
    Fetch all tasks of user
*/
export const fetchTasks = () => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get("/api/tasks");
        dispatch({ type: FETCH_TASKS, payload: response.data });
    } catch (error: any) {
        console.log(error);
    }
};

/*
    Delete a task
*/
export const deleteTask = (taskId: string) => async (dispatch: Dispatch) => {
    try {
        await axios.delete(`/api/tasks/${taskId}`);
        dispatch({ type: DELETE_TASK, payload: taskId });
    } catch (error) {
        console.log(error);
    }
};

// -----------

// User Actions
export const fetchUser = () =>
    async function (dispatch: Dispatch) {
        await axios
            .get("/api/users/me")
            .then((response) =>
                dispatch({ type: FETCH_USER, payload: response.data }),
            );
    };

// ----------

// Timer ACtions
export const timerSetUp =
    (newSetting: { pomodoro: number; break: number }) =>
    (dispatch: Dispatch) => {
        dispatch({ type: CHANGE_SETTING, payload: newSetting });
        history.go(0);
    };
