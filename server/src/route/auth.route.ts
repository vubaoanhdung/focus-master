import { Application, Request, Response } from "express";
import passport from "passport";
import config from "config";

const authRoute = (app: Application) => {
    app.get(
        "/auth/google",
        passport.authenticate("google", { scope: ["profile", "email"] }),
    );

    app.get(
        "/auth/google/callback",
        passport.authenticate("google", {
            failureRedirect: config.get("clientUrl") as string,
            successRedirect: config.get("clientUrl") as string,
        }),
    );
};

export default authRoute;
