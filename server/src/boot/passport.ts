import passport from "passport";
import config from "config";
import { Profile, Strategy, VerifyCallback } from "passport-google-oauth20";
import User from "../model/user.model";

passport.serializeUser(function (user: any, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new Strategy(
        {
            clientID: config.get("googleClientId") as string,
            clientSecret: config.get("googleClientSecret") as string,
            callbackURL: config.get("googleCallbackUrl") as string,
        },
        async function (
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: VerifyCallback,
        ) {
            const user = await User.findOne({ googleId: profile.id });

            if (user) {
                done(null, user);
            } else {
                const newUser = await User.create({ googleId: profile.id });
                done(null, newUser);
            }
        },
    ),
);
