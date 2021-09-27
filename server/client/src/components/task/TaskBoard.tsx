import { NewTaskForm } from "./NewTaskForm";
import { TaskList } from "./TaskList";

export const TaskBoard = () => {
    return (
        <div>
            <NewTaskForm></NewTaskForm>
            <TaskList></TaskList>
        </div>
    );
};
