import { ADD_TASK, FETCH_TASKS, DELETE_TASK } from "./../actions/types";
import { AnyAction } from "redux";
import _ from "lodash";

type TaskState = {
    tasks: Task[];
};

interface Task {
    name: string;
    note: string;
    taskId: string;
}

const initialState = {
    tasks: [],
};

const taskReducer = (state: TaskState = initialState, action: AnyAction) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask: Task = action.payload;
            return { ...state, tasks: [...state.tasks, newTask] };

        case FETCH_TASKS:
            return { ...state, tasks: [...state.tasks, ...action.payload] };

        case DELETE_TASK:
            const tasks = _.filter(
                state.tasks,
                (task) => task.taskId !== action.payload,
            );
            return { ...state, tasks: [...tasks] };

        default:
            return state;
    }
};

export default taskReducer;
