import { BiTask } from "react-icons/bi";
import { useForm, SubmitHandler } from "react-hook-form";
import { addTask } from "./../actions";
import { useDispatch } from "react-redux";

interface FormInput {
    name: String;
    note: String;
}

export const NewTaskForm = () => {
    const { register, handleSubmit, reset } = useForm<FormInput>();
    const dispatch = useDispatch();
    const onFormSubmit: SubmitHandler<FormInput> = (data) => {
        dispatch(addTask(data));
        reset();
    };

    return (
        <div className="card text-center bg-transparent">
            <div className="card-header p-3">
                <BiTask className="m-auto" size="2em"></BiTask>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="form-group">
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="What are you working on?"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="note">NOTE</label>
                        <textarea
                            {...register("note")}
                            className="form-control"
                            id="note"
                            rows={1}
                        ></textarea>
                    </div>
                    <div className=" row justify-content-lg-around pt-3">
                        <button
                            className="col-lg-6 col-md-12 col-sm-12 col- btn btn-secondary"
                            type="reset"
                        >
                            Clear
                        </button>
                        <button
                            className="col-lg-6 col-md-12 col-sm-12 btn btn-primary"
                            type="submit"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
