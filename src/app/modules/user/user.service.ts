import { IUser } from "./user.interface";
import User from "./user.model";


export const createUserToDB =async (payLoad: IUser)
:Promise<IUser> => {
    //creare instance
   
    const user = new User(payLoad)
    await user.save();
    // console.log(user)
    console.log(user.fullName());
    
    return user;
    };

    export const getUserFromDB = async():Promise<IUser[]> => {
      const users = await User.find();
      //custom instance method
      return users
    };

    export const getUserByIdFromDB = async(payLaod: string):Promise<IUser | null> => { //here id get with param payLoad
      const user =await User.findOne({id: payLaod}, {name: 1, contactNo: 1});
      return user;
    }


   