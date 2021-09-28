import { NewTaskForm } from "./NewTaskForm";
import { TaskList } from "./TaskList";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

export const TaskBoard = () => {
    const user = useSelector((state: RootState) => state.userReducer);
    return (
        <div className="row justify-content-center">
            <div className="col-12">
                <NewTaskForm />
            </div>

            <div className="col-10 mt-3">
                {user ? (
                    <TaskList />
                ) : (
                    <div className="alert alert-warning" role="alert">
                        Please Sign In To Save Your Works
                    </div>
                )}
            </div>
        </div>
    );
};
