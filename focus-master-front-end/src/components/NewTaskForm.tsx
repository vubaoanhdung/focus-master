import { BiTask } from "react-icons/bi";
export const NewTaskForm = () => {
    return (
        <div className="card text-center">
            <div className="card-header p-3">
                <BiTask className="m-auto" size="2em"></BiTask>
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="task"
                            placeholder="What are you working on?"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="note">NOTE</label>
                        <textarea
                            className="form-control"
                            id="note"
                            rows={1}
                        ></textarea>
                    </div>
                    <div className=" row justify-content-lg-around pt-3">
                        <button className="col-lg-3 btn btn-secondary">
                            Cancel
                        </button>
                        <button className="col-lg-3 btn btn-primary">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
