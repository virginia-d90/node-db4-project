const express = require("express");

const db = require("../data/connection.js");

const router = express.Router();

router.get('/', (req, res) => {
    db("recipes")
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(error => {
      res.status(500).json({ 
        message: 'There was an error getting the recipes',
        error: error.message })
    });
  });
  
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.select("*")
    .from("recipes")
    .where({ id })
    .first()
    .then(recipe => 
      res.status(200).json({ data: recipe }))
    .catch(error => {
      res.status(500).json({ 
        message: "could not the car with that id",
        error: error.message })
    })
  });

  module.exports = router
  