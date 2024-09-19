import dotenv from "dotenv"
import connectDB from "./db/index.db.js"

dotenv.config();

connectDB()















/*(async()=>{
    try {
 await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  app.on(error,(error)=> {
    console.log("error",error);
    throw error
  })
  app.listen(process.env.PORT ,()=>
{
    console.log(`this is responding ${process.env.PORT}`)
})
    } catch(error){
        console.error("ERROR:",error)
        throw err
    };
    
 })()*/