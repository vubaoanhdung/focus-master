import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface TaskProps {
    name: String;
    note: String;
}

export const Task: React.FC<TaskProps> = ({ name, note }) => {
    const [isChecked, setIsChecked] = useState(false);
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
                                <a className="dropdown-item" href="#">
                                    Edit
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Delete
                                </a>
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
