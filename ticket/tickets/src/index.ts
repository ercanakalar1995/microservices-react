import mongoose from 'mongoose';

import { app } from './app';

const start = async () => {
  console.log(process.env.JWT_KEY, 'jwt key');
  if (!process.env.JWT_KEY) throw new Error('JWT_KEY must be defined');

  if (!process.env.MONGO_URI) throw new Error('MONGO_URI must be defined');

  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error, 'error connecting to db');
  }
};
// 192.168.49.2
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

start();