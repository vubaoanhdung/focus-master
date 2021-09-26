import { DocumentDefinition, FilterQuery } from "mongoose";
import Task, { TaskDocument } from "../model/task.model";

export const createTask = async (input: DocumentDefinition<TaskDocument>) => {
    try {
        return await Task.create(input);
    } catch (error: any) {
        throw new Error(error);
    }
};

export const findTask = async (query: FilterQuery<TaskDocument>) => {
    try {
        return await Task.findOne(query);
    } catch (error: any) {
        throw new Error(error);
    }
};

export const getTasks = async (ownerId: string) => {
    try {
        return await Task.find({ owner: ownerId });
    } catch (error: any) {
        throw new Error(error);
    }
};

export const deleteTask = async (query: FilterQuery<TaskDocument>) => {
    try {
        return await Task.deleteOne({ query });
    } catch (error: any) {
        throw new Error(error);
    }
};
