import express from 'express';
import connectDB from './db/index.db.js'; 
import dotenv from 'dotenv';
const app = express();
dotenv.config(); 
connectDB();

let PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
