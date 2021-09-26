import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
    googleId: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new mongoose.Schema(
    {
        googleId: { type: String, unique: true },
        email: { type: String },
    },
    { timestamps: true },
);

UserSchema.virtual("tasks", {
    ref: "Task",
    localField: "_id",
    foreignField: "owner",
});

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
