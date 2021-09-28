import { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { StartTimerButton } from "./StartTimerButton";
import { StopTimerButton } from "./StopTimerButton";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { SettingState } from "../../reducers/settingReducer";

export const TimerBoard = () => {
    const setting: SettingState = useSelector(
        (state: RootState) => state.settingReducer,
    );

    // States
    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState("pomodoro");
    const [secondsLeft, setSecondsLeft] = useState(setting.pomodoro * 60);

    // references to use inside time interval
    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    const switchMode = () => {
        const nextMode = modeRef.current === "pomodoro" ? "break" : "pomodoro";
        setMode(nextMode);
        modeRef.current = nextMode;

        const nextSecondsLeft =
            (nextMode === "pomodoro" ? setting.pomodoro : setting.break) * 60;
        setSecondsLeft(nextSecondsLeft);
        secondsLeftRef.current = nextSecondsLeft;

        setIsPaused(true);
        isPausedRef.current = true;
    };

    const tick = () => {
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            if (secondsLeftRef.current === 0) {
                switchMode();
            }
            tick();
        }, 1000);
        return () => clearInterval(interval);
    });

    const modeSeconds =
        mode === "pomodoro" ? setting.pomodoro * 60 : setting.break * 60;
    const percentage = Math.round((secondsLeft / modeSeconds) * 100);
    const minutes = Math.floor(secondsLeft / 60);
    let seconds: string | number = secondsLeft % 60;
    if (seconds < 10) seconds = "0" + seconds;

    return (
        <div>
            <div className="row">
                <div className="btn-group btn-group-md p-5" role="group">
                    <button
                        type="button"
                        className={`btn btn-outline-secondary ${
                            mode === "pomodoro" ? "active" : ""
                        }`}
                        onClick={() => {
                            if (mode !== "pomodoro") {
                                switchMode();
                            }
                        }}
                    >
                        Pomodoro
                    </button>
                    <button
                        type="button"
                        className={`btn btn-outline-secondary ${
                            mode === "break" ? "active" : ""
                        }`}
                        onClick={() => {
                            if (mode !== "break") {
                                switchMode();
                            }
                        }}
                    >
                        Break
                    </button>
                </div>
            </div>
            <div className="row justify-content-center p-2 w-75 m-auto">
                <div className="col-8">
                    <CircularProgressbar
                        value={percentage}
                        text={minutes + " : " + seconds}
                        styles={buildStyles({
                            textColor: "#fff",
                            pathColor:
                                mode === "pomodoro" ? "#f54242" : "#00f7ff",
                            trailColor: "rgba(255,255,255,.2)",
                        })}
                    />
                </div>
            </div>
            <div className="row justify-content-center p-5">
                <div className="col-2 text-center">
                    {isPaused ? (
                        <StartTimerButton
                            onClick={() => {
                                setIsPaused(false);
                                isPausedRef.current = false;
                            }}
                        />
                    ) : (
                        <StopTimerButton
                            onClick={() => {
                                setIsPaused(true);
                                isPausedRef.current = true;
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
