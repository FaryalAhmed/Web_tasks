
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/Movies');
const express = require('express');
const app = express();
mongoose.connect("mongodb://localhost/vidly", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => console.log("Connected to mongoDB..."))
    .catch(err => console.error('Could not connect to MongoDB...'))



app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));