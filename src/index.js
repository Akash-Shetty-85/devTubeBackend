import { app } from "./app.js";
import connectDB from "./db/index.db.js";
import dotenv from "dotenv";
dotenv.config();
connectDB()
  .then(() => {
    let PORT = process.env.PORT || 8080;
    app.on("error", (error) => {
      console.log(`the server has error`, error);
      throw error;

    })
    app.listen(PORT, () => {
      console.log("this sever is listening ");
    })

  })
  .catch((error) => {
    console.log("mongobd connection failed", error);
    throw error
  })

