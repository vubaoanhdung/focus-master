import express, { Application, Request, Response, NextFunction } from "express";
import config from "config";
import connect from "./db/connect";
import userRoute from "./route/user.route";
import taskRoute from "./route/task.route";
import authRoute from "./route/auth.route";
import passport from "passport";
import "./boot/passport";
import cookieSession from "cookie-session";
import cors from "cors";

const app: Application = express();
const port = config.get("port") as number;
const host = config.get("host") as string;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    cookieSession({
        maxAge: config.get("cookieAge") as number,
        keys: [config.get("cookieKey") as string],
    }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
    connect(); // connect to database
    authRoute(app);
    userRoute(app);
    taskRoute(app);
});
