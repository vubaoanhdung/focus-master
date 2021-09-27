import {
    createTask,
    deleteTask,
    findTask,
    getTasks,
} from "../service/task.service";
import { Request, Response } from "express";
import { get, omit } from "lodash";

export const createTaskHandler = async (req: Request, res: Response) => {
    try {
        const owner = get(req.user, "id");
        const taskData = get(req.body, "data");
        const task = await createTask({ ...taskData, owner });
        return res.send(task.toJSON());
    } catch (error: any) {
        return res.status(400).send(error.message);
    }
};

export const getTaskHandler = async (req: Request, res: Response) => {
    const taskId = req.params["taskId"];
    const task = await findTask({ taskId });

    if (!task) {
        return res.sendStatus(404);
    }
    return res.send(task);
};

export const deleteTaskHandler = async (req: Request, res: Response) => {
    try {
        const taskId = req.params["taskId"];
        const task = await findTask({ taskId });

        if (!task) {
            return res.sendStatus(404);
        }

        await deleteTask({ taskId });

        return res.sendStatus(200);
    } catch (error: any) {
        return res.status(404).send(error.message);
    }
};

export const getAllTasksHandler = async (req: Request, res: Response) => {
    try {
        const userId = get(req.user, "id");
        const tasks = await getTasks(userId);

        // removing _id and owner fields
        const modifiedTasks = tasks.map((task) => {
            return omit(task.toJSON(), ["_id", "owner"]);
        });
        return res.send(modifiedTasks);
    } catch (error: any) {
        return res.status(400).send(error.message);
    }
};
