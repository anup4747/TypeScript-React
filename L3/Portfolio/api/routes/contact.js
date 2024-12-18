import express from 'express';
import { MongoClient } from 'mongodb';

const router = express.Router();
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function createContact(contactData) {
  try {
    await client.connect();
    const database = client.db('RequestsPortfolio'); // replace with your database name
    const contacts = database.collection('Requests');
    const result = await contacts.insertOne(contactData);
    console.log(`New contact created with the following id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    await createContact({ name, email, message });
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

export default router;
