import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
import { IUser } from "./app/modules/user/user.interface";

const app: Application = express();
//cors use
app.use(cors());
//parse data
app.use(express.json()); //convert rechive data into json
app.use(express.urlencoded({ extended: true })); //for url encoding

//get app
app.get("/", (req: Request, res: Response, next: NextFunction) => { // here app.get is a api and  "/" is root route and (work function here)
  //inserting test data in mongodb
  /*
        Step1: Interface
        Step2: Schema
        Step3: Model
        Step4: Database Query
    */
  // res.send('Hello World!')
  // next()
  //*******************************create await function
  const createUserToDB =async () => {
   
  //creare instance
  const user = new User({
    id: "449",
    role: "student",
    password: "8888888",
    name: {
      firstName: "Mahbub",
      middleName?: "Hasan",
      lastName: "Mahbub"
    },
    dateOfBirth: "january",
    gender: "male",
    email: "hasan@gmail.com",
    contactNo: "33333333",
    emergencyContactNo: "333333333",
    presentAddress: "Bangladesh",
    permanentAddress: "usa",
  });
  await user.save();
//   console.log(user)
  };
  createUserToDB();

});

//Pattern modular / MVC

   /*Structure breakdown

        Interface -> interface.ts
        schema + model -> model.ts

        route 
        route function  -> controller.ts
        Database Query -> service
        
   */

export default app;
