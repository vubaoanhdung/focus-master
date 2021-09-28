import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { RootState } from "../../reducers";
import { SettingState } from "../../reducers/settingReducer";
import { timerSetUp } from "../../actions";

const SettingModal = () => {
    const dispatch = useDispatch();
    const setting: SettingState = useSelector(
        (state: RootState) => state.settingReducer,
    );
    const [pomodoroPeriod, setPomodoroPeriod] = useState(setting.pomodoro);
    const [breakPeriod, setBreakPeriod] = useState(setting.break);

    const onSaveClick = () => {
        dispatch(
            timerSetUp({
                pomodoro: pomodoroPeriod,
                break: breakPeriod,
            }),
        );
    };
    return (
        <>
            <Link
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                className="nav-link text-white-50 bg-transparent"
                to="#"
            >
                Setting
            </Link>

            <div className="row">
                <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="staticBackdropLabel"
                                >
                                    Settings
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="row input-group mb-3">
                                    <span
                                        className="input-group-text col-6"
                                        id="basic-addon1"
                                    >
                                        Pomodoro Interval
                                    </span>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Minutes"
                                        aria-label="pomodoro"
                                        aria-describedby="basic-addon1"
                                        defaultValue={pomodoroPeriod}
                                        onChange={(event) => {
                                            let newValue = event.target.value
                                                ? parseInt(event.target.value)
                                                : setting.pomodoro;
                                            setPomodoroPeriod(newValue);
                                        }}
                                    />
                                </div>
                                <div className="row input-group mb-3">
                                    <span
                                        className="input-group-text col-6"
                                        id="basic-addon1"
                                    >
                                        Break Interval
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Minutes"
                                        aria-label="pomodoro"
                                        aria-describedby="basic-addon1"
                                        defaultValue={breakPeriod}
                                        onChange={(event) => {
                                            let newValue = event.target.value
                                                ? parseInt(event.target.value)
                                                : setting.break;
                                            setBreakPeriod(newValue);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    data-bs-dismiss="modal"
                                    onClick={() => onSaveClick()}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SettingModal;
