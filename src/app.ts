import express, { Application} from "express";
import cors from "cors";

//aplication routes
import userRoute from './app/modules/user/user.route'

const app: Application = express();
//cors use
app.use(cors());
//parse data
app.use(express.json()); //convert rechive data into json
app.use(express.urlencoded({ extended: true })); //for url encoding

//use app
app.use("/api/v1/user", userRoute);

export default app;
