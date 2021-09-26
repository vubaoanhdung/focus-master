import express, { Request } from "express";
import {
    createTaskHandler,
    deleteTaskHandler,
    getTaskHandler,
    getAllTasksHandler,
} from "../controller/task.controller";

import requireLogin from "../middleware/requireLogin";

const taskRoute = (app: express.Application) => {
    // create a new task
    app.post("/api/tasks", createTaskHandler);

    //get all tasks
    app.get("/api/tasks", requireLogin, getAllTasksHandler);

    // get a task
    app.get("/api/tasks/:taskId", requireLogin, getTaskHandler);

    // delete a task
    app.delete("/api/tasks/:taskId", requireLogin, deleteTaskHandler);

    app.get("/api/healthcheck", (req, res) => {
        res.send("healthcheck");
    });
};
export default taskRoute;
