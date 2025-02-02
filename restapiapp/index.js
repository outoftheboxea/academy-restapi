//Code by OutOfTheBoxEA - email> outoftheboxea@gmail.com

// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

/**
 * Read a JSON file from the local file system.
 * @param {string} filePath - Relative path to the JSON file.
 * @returns {Promise<Object>} Parsed JSON data.
 */
const readLocalJSON = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, filePath), 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      try {
        const jsonData = JSON.parse(data);
        resolve(jsonData);
      } catch (parseError) {
        reject(parseError);
      }
    });
  });
};

/**
 * Endpoint to list all available objects (from config.json).
 */
app.get('/objects', async (req, res) => {
  try {
    const config = await readLocalJSON('config.json');
    // Assuming config.json has a structure like: { "objects": ["user", "product"] }
    res.json(config.objects);
  } catch (error) {
    console.error('Error loading config.json:', error);
    res.status(500).json({ error: 'Failed to load config.json' });
  }
});

/**
 * Endpoint to retrieve specific object data.
 */
app.get('/objects/:name', async (req, res) => {
  const objectName = req.params.name;
  const filePath = path.join('data', `${objectName}.json`);

  try {
    const objectData = await readLocalJSON(filePath);
    res.json(objectData);
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
    res.status(404).json({ error: 'Object not found' });
  }
});

/**
 * Health check endpoint.
 */
app.get('/health', (req, res) => {
  res.json({ status: 'API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
