import { Task } from "./Task";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";

export const TaskList = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

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
                                key={index}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
