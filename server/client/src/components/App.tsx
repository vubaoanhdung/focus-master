import { NavBar } from "./navbar/NavBar";
import { TaskBoard } from "./task/TaskBoard";
import { TimerBoard } from "./timer/TimerBoard";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../actions";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return (
        <Router>
            <Route exact path="/">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8 p2">
                            <NavBar></NavBar>
                            <hr className="text-white" />
                        </div>
                    </div>

                    <div className="row justify-content-around p-4 align-items-start">
                        <div className="col-lg-6 border border-secondary rounded">
                            <TimerBoard></TimerBoard>
                        </div>
                        <div className="col-lg-6">
                            <TaskBoard />
                        </div>
                    </div>
                </div>
            </Route>
        </Router>
    );
}

export default App;
