const mongoose = require('mongoose');
const express = require('express');
const Students = require('./routes/Students')
const express_pkg = require('express');

const app = express();

mongoose.connect("mongodb://localhost/RestfulAPILabZain", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
mongoose.connection
    .once('open', () => console.log(('connected')))
    .on('error', error => {
        console.log("your error", error)
    })
    /*mongoose.connect('mongodb://localhost/27017')
        .then(() => console.log('Connected to MongoDB...'))
        .catch(err => console.error('Could not connect to MongoDB...'));*/

app.use(express_pkg.json());
app.use('/api/StudentsInfo/', Students)


const port = process.env.PORT || 3000;
app.listen(3000, () => { console.log(`listening to port ${port}`) });