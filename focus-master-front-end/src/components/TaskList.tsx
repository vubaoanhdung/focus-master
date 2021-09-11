import { Task } from "./Task";

export const TaskList = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="row pt-3">
                    <h4>Tasks</h4>
                </div>
                <ul className="row list-group">
                    <Task></Task>
                    <Task></Task>
                    <Task></Task>
                </ul>
            </div>
        </div>
    );
};
