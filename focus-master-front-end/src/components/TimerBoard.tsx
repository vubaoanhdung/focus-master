import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPlay } from "react-icons/fa";
export const TimerBoard = () => {
    return (
        <div>
            <div className="row">
                <div className="btn-group btn-group-lg p-5" role="group">
                    <button type="button" className="btn btn-outline-secondary">
                        Pomodoro
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        Short Break
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        Long Break
                    </button>
                </div>
            </div>
            <div className="row justify-content-center p-5">
                <div className="col-xs-8 col-md-8 col-lg-8">
                    <CircularProgressbar
                        value={60}
                        text={`60%`}
                        styles={buildStyles({
                            textColor: "#fff",
                            pathColor: "#f54242",
                            trailColor: "rgba(255,255,255,.2)",
                        })}
                    />
                </div>
            </div>
            <div className="row justify-content-center align-items-center p-4">
                <div className="col-xs-4 col-md-4 col-lg-4 text-center">
                    <FaPlay size="6em" color="gray"></FaPlay>
                </div>
            </div>
        </div>
    );
};
