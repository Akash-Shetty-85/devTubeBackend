import express from 'express';
import connectDB from './db/index.db.js'; 
import dotenv from 'dotenv';

dotenv.config(); 
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
