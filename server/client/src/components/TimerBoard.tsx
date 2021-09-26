import { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { RunTimerButton } from "./RunTimerButton";
import { StopTimerButton } from "./StopTimerButton";
export const TimerBoard = () => {
    const [isPaused, setIsPaused] = useState(true);
    const [secondsLeft, setSecondsLeft] = useState(25 * 60);
    const [mode, setMode] = useState("work");

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    const switchMode = () => {
        const nextMode = modeRef.current === "work" ? "break" : "work";
        setMode(nextMode);
        modeRef.current = nextMode;

        const nextSecondsLeft = (nextMode === "work" ? 25 : 5) * 60;
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
    }, []);

    const modeSeconds = mode === "work" ? 25 * 60 : 5 * 60;
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
                            mode === "work" ? "active" : ""
                        }`}
                        onClick={() => {
                            if (mode !== "work") {
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
                            pathColor: mode === "work" ? "#f54242" : "#00f7ff",
                            trailColor: "rgba(255,255,255,.2)",
                        })}
                    />
                </div>
            </div>
            <div className="row justify-content-center p-5">
                <div className="col-2 text-center border border-secondary p-2 rounded">
                    {isPaused ? (
                        <RunTimerButton
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
