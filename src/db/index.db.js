// import mongoose from "mongoose"
// import { DB_NAME } from "../constant.js"

// const connectDB = async () => {
//     try 
//     {
//       const connectionInstances = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,{
//         useNewUrlParser:true,
//         useUnifiedTopology: true,
//       })
//       console.log(`/n MOGOOSEDB IS CONNECTED !! DATA HOST:${connectionInstances.connection.host}`) ;
//      } catch (error)
//          {
//         console.log("MOGOOSEDB connection error !",error);
//         process.exit(1)
//          }
// }
// export default connectDB



import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js'; 

const connectDB = async () => {
  try {
    const connectionInstances = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\n MongoDB is connected! Data host: ${connectionInstances.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error!', error);
    process.exit(1);
  }
};

export default connectDB;