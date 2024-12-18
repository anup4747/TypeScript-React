import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import run from './db/connection.js';
import contactRoutes from './routes/contact.js';

const app = express();
app.use(express.json()); 

app.use(cors());
app.use(bodyParser.json());
run();

app.use('/api/contact', contactRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
