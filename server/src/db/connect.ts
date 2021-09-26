import mongoose from "mongoose";
import config from "config";

/*
    Making the connection to the database
*/
const connect = () => {
    const dbUri = config.get("dbUri") as string;

    mongoose
        .connect(dbUri)
        .then(() => {
            console.log("Database Connected");
        })
        .catch((error) => {
            console.log(error);
            process.exit(1);
        });
};

export default connect;
