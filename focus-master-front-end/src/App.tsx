import { NavBar } from "./components/NavBar";
import { TaskBoard } from "./components/TaskBoard";
import { TimerBoard } from "./components/TimerBoard";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <Route exact path="/">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8 p2">
                            <NavBar></NavBar>
                            <hr />
                        </div>
                    </div>

                    <div className="row justify-content-around p-4 align-items-start">
                        <div className="col-6 border border-secondary">
                            <TimerBoard></TimerBoard>
                        </div>
                        <div className="col-4">
                            <TaskBoard />
                        </div>
                    </div>
                </div>
            </Route>
        </Router>
    );
}

export default App;
