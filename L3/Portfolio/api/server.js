// api/index.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Could not connect to MongoDB', err.message);
    process.exit(1); // Exit process with failure
  }
}
run();

app.use('/api/contact', contactRoutes);

export default app;
