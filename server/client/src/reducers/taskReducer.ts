import { AnyAction } from "redux";

type TaskState = {
    tasks: Task[];
};

interface Task {
    name: String;
    note: String;
}

const initialState = {
    tasks: [],
};

const taskReducer = (state: TaskState = initialState, action: AnyAction) => {
    switch (action.type) {
        case "ADD_TASK":
            const newTask: Task = action.payload;
            return { ...state, tasks: [...state.tasks, newTask] };

        case "FETCH_TASKS":
            const tasks = action.payload;
            return { ...state, tasks: [...state.tasks, ...tasks] };

        default:
            return state;
    }
};

export default taskReducer;
