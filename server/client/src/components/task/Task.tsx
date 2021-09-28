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

    const onDelete = () => {
        dispatch(deleteTask(taskId));
    };

    return (
        <div className="card mb-2">
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
                                onClick={() => onDelete()}
                                className="dropdown-item"
                            >
                                Delete
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {!note ? (
                ""
            ) : (
                <div className="card-body">
                    <p className="card-text">
                        {isChecked ? <s>{note}</s> : note}
                    </p>
                </div>
            )}
        </div>
    );
};
