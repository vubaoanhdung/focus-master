import { Request, Response, NextFunction } from "express";

/*
    Middleware to check whether the user have logged in
*/
const requireLogin = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.status(401).send({ error: "Unauthorized Request" });
    }
    next();
};

export default requireLogin;
