import mongoose from "mongoose";
import { nanoid } from "nanoid";
import { UserDocument } from "./user.model";

export interface TaskDocument extends mongoose.Document {
    name: string;
    note: string;
    createdAt: Date;
    updatedAt: Date;
    owner: UserDocument["_id"];
}

const TaskSchema = new mongoose.Schema(
    {
        taskId: {
            type: String,
            required: true,
            unique: true,
            default: () => nanoid(10),
        },
        name: { type: String, required: true },
        note: { type: String },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    { timestamps: true },
);

const Task = mongoose.model<TaskDocument>("Task", TaskSchema);
export default Task;
