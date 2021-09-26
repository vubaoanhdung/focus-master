import express, { Request, Response } from "express";
import requireLogin from "../middleware/requireLogin";
import config from "config";

const userRoute = (app: express.Application) => {
    app.get("/api/users/me", (req: Request, res: Response) => {
        res.send(req.user);
    });

    app.get(
        "/api/users/logout",
        requireLogin,
        (req: Request, res: Response) => {
            req.logout();
            res.redirect(config.get("clientUrl") as string);
        },
    );
};

export default userRoute;
