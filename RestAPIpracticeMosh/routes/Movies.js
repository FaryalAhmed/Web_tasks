const { Movie, validate } = require("../models/Movies");
const { Genre } = require("../models/genres");
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    const movies = await Movie.find().sort('name');
    console.log(movies);
    res.send(movies);
});

module.exports = router;