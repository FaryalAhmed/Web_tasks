const {
    Student,
    studentValidation
} = require('../models/Students.js');
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', async(req, res) => {
    const Student_details = await Student.find().sort('name');
    res.send(Student_details);
});

router.post('/', async(req, res) => {
    const { error } = studentValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let StudentInfo = new Student({

        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,

        address: {
            street_address: req.body.address.street_address,
            city: req.body.address.city,
            country: req.body.address.country
        },
        phone_number: req.body.phone_number

    });
    StudentInfo = await StudentInfo.save();

    res.send(StudentInfo);
});

router.put('/:id', async(req, res) => {
    const { error } = studentValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const StudentInfo = await Student.findByIdAndUpdate(req.params.id, {

        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,

        address: {
            street_address: req.body.address.street_address,
            city: req.body.address.city,
            country: req.body.address.country
        },
        phone_number: req.body.phone_number

    }, {
        new: true
    });

    if (!StudentInfo) return res.status(404).send('The genre with the given ID was not found.');

    res.send(StudentInfo);
});

router.delete('/:id', async(req, res) => {
    const StudentInfo = await Student.findByIdAndRemove(req.params.id);

    if (!StudentInfo) return res.status(404).send('The genre with the given ID was not found.');

    res.send(StudentInfo);
});

router.get('/:id', async(req, res) => {
    const StudentInfo = await Student.findById(req.params.id);

    if (!StudentInfo) return res.status(404).send('The genre with the given ID was not found.');

    res.send(StudentInfo);
});



module.exports = router;