import { Task } from "./Task";

export const TaskBoard = () => {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-xs-8 col-md-8 col-lg-8 text-center">
                    <label>TASKS</label>
                </div>
            </div>
            <div className="row">
                <ul className="list-group">
                    <Task />
                    <Task />
                    <Task />
                </ul>
            </div>
        </div>
    );
};
