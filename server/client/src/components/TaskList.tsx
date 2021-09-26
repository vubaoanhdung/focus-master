import { Task } from "./Task";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducers";
import { useEffect } from "react";
import { fetchTasks } from "../actions";

export const TaskList = () => {
    const dispatch = useDispatch();

    const user = useSelector((state: RootState) => state.userReducer);
    const tasks = useSelector((state: RootState) => state.taskReducer.tasks);

    useEffect(() => {
        if (user) {
            dispatch(fetchTasks());
        }
    }, [dispatch, user]);

    return (
        <div className="row ">
            <div className="col-12">
                <div className="row pt-3">
                    <h4>Tasks</h4>
                </div>
                <ul className="row list-group">
                    {tasks.map((task, index) => {
                        return (
                            <Task
                                name={task.name}
                                note={task.note}
                                key={task.taskId}
                                taskId={task.taskId}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
