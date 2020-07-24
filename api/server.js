const express = require('express');
const helmet = require('helmet')
const recipesRouter = require("../recipes/recipes-router");
const db = require("../data/connection")

const server = express();

server.use(helmet())
server.use(express.json());
server.use('/api/recipes', recipesRouter);

server.get("/api/recipes", (req, res) => {
    db("recipes")
        .then(recipes => {
            res.status(200).json({ data: recipes });
        })
        .catch(error => {
            res.status(500).json({ 
              message: 'There was an error getting the recipes', 
              error: error.message });
        });
  });

module.exports = server;