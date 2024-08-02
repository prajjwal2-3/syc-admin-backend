const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Property = require('../models/Property.js');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Connect to MongoDB
mongoose.connect('mongodb+srv://prajjwalbh25:AtZMTaWRJWT6uRl1@cluster0.rbysjio.mongodb.net/syc').then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));
// Routes

// Get all properties
app.get('/properties', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a single property by ID
app.get('/properties/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).send('Property not found');
    }
    res.json(property);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a property by ID
app.put('/properties/:id', async (req, res) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProperty) {
      return res.status(404).send('Property not found');
    }
    res.json(updatedProperty);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete a property by ID
app.delete('/properties/:id', async (req, res) => {
  try {
    const deletedProperty = await Property.findByIdAndDelete(req.params.id);
    if (!deletedProperty) {
      return res.status(404).send('Property not found');
    }
    res.json(deletedProperty);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start the server
app.listen(port, () => {
   try{
    
    console.log(`Server running on http://localhost:${port}`);
   }catch(err){
    console.log(err)
   }
  });
