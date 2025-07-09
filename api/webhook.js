const express = require('express');
const app = express();
app.use(express.json()); // Parse JSON payloads

app.post('/', (req, res) => {
  console.log('Webhook received:', req.body); // Log the webhook data
  res.status(200).json({ message: 'Webhook received' });
});

module.exports = app;
