import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteTask } from "../../actions";
import { useDispatch } from "react-redux";

interface TaskProps {
    name: string;
    note: string;
    taskId: string;
}

export const Task: React.FC<TaskProps> = ({ name, note, taskId }) => {
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();

    const onEdit = () => {
        console.log("Edit Item with ID: " + taskId);
    };

    const onDelete = () => {
        dispatch(deleteTask(taskId));
    };

    return (
        <div className="list-group-item bg-transparent">
            <div className="card bg-transparent">
                <div className="card-header">
                    <input
                        onChange={(event) => setIsChecked(event.target.checked)}
                        className="form-check-input me-3"
                        type="checkbox"
                    />
                    {isChecked ? <s>{name}</s> : name}

                    <div className="dropdown float-end">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                        >
                            <i>
                                <BsThreeDotsVertical className="float-end" />
                            </i>
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <button
                                    onClick={() => onEdit()}
                                    className="dropdown-item"
                                >
                                    Edit
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => onDelete()}
                                    className="dropdown-item"
                                >
                                    Delete
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <footer className="blockquote-footer">
                            {isChecked ? <s>{note}</s> : note}
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};
