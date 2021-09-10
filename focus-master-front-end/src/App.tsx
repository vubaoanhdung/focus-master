import React from "react";
import { NavBar } from "./components/NavBar";
import { TaskBoard } from "./components/TaskBoard";
import { TimerBoard } from "./components/TimerBoard";

function App() {
    return (
        <div className="container border border-warning">
            <div className="row justify-content-center">
                <div className="col-xs-8 col-md-8 col-lg-8">
                    <NavBar></NavBar>
                </div>
            </div>
            <div className="row justify-content-around">
                <div className="col-xs-6 col-md-6 col-lg-6 border border-secondary">
                    <TimerBoard></TimerBoard>
                </div>
                <div className="col-xs-4 col-md-4 col-lg-4">
                    <TaskBoard />
                </div>
            </div>
        </div>
    );
}

export default App;
