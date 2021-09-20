export interface TaskState {
    tasks: Task[];
}

interface Task {
    name: String;
    note: String;
}

const initialState = {
    tasks: [],
};

type AddTaskAction = {
    type: "ADD_TASK";
    payload: Task;
};

const taskReducer = (
    state: TaskState = initialState,
    action: AddTaskAction
) => {
    switch (action.type) {
        case "ADD_TASK":
            const newTask: Task = action.payload;
            return { ...state, tasks: [...state.tasks, newTask] };
        default:
            return state;
    }
};

export default taskReducer;
