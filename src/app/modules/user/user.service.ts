import { IUser } from "./user.interface";
import User from "./user.model";


export const createUserToDB =async (payLoad: IUser)
:Promise<IUser> => {
    //creare instance
   
    const user = new User(payLoad)
    await user.save();
    // console.log(user)
    return user;
    };

    export const getUserFromDB = async() => {
      const users = await User.find();
      return users
    }


    // const user = await new User({ //here User do query and we know that database query on model  and await here for async
    //   id: "424",
    //   role: "student",
    //   password: "testing",
    //   name: {
    //     firstName: "Mahbub",
    //     middleName: "Hasan",
    //     lastName: "Mahbub"
    //   },
    //   dateOfBirth: "january",
    //   gender: "male",
    //   email: "hasan@gmail.com",
    //   contactNo: "33333333",
    //   emergencyContactNo: "333333333",
    //   presentAddress: "Bangladesh",
    //   permanentAddress: "usa",
    // });