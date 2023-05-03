import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to mongodb');
  } catch (error) {
    throw error;
  }
};

// The 23-29 lines are just making sure that mongoDB is connected or disconnected
mongoose.connection.on('disconnected', () => {
  console.log('mongoDB is disconnected!');
});

app.get('/', (req, res) => {
  res.send('hello first request');
});

app.listen(8800, () => {
  connect();
  console.log('Connected to backend');
});
