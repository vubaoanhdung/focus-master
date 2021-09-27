import { BiTask } from "react-icons/bi";
import { useForm, SubmitHandler } from "react-hook-form";
import { addTask } from "../../actions";
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
        <div className="card text-center bg-transparent border border-secondary">
            <div className="card-header p-3">
                <BiTask className="m-auto text-white-50" size="2em"></BiTask>
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
                        <label
                            htmlFor="note"
                            className="text-white-50 mt-3 mb-2"
                        >
                            NOTE
                        </label>
                        <textarea
                            {...register("note")}
                            className="form-control"
                            id="note"
                            rows={1}
                            placeholder="(optional)"
                        ></textarea>
                    </div>
                    <div className=" row pt-3 justify-content-lg-around">
                        <button
                            className="col-lg-5 col-md-12 col-sm-12 col- btn btn-secondary"
                            type="reset"
                        >
                            Clear
                        </button>
                        <button
                            className="col-lg-5 col-md-12 col-sm-12 btn btn-primary"
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
