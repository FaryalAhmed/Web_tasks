const Joi = require('@hapi/joi');

const mongoose = require('mongoose');
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const Student = mongoose.model('Student', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },

    gender: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 7
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    address: {
        type: [{
            street_address: {
                type: String,
                required: true,
                minlength: 2,
                maxlength: 50,

            },
            city: {
                type: String,
                required: true,
                minlength: 2,
                maxlength: 50,
            },
            country: {
                type: String,
                required: true,
                minlength: 2,
                maxlength: 50,
            }
        }]
    },
    phone_number: {
        type: [String],
    }

}));

function studentValidation(student) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        gender: Joi.string().min(3).max(50).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'edu.pk'] } }),
        address: Joi.object().keys({
            street_address: Joi.string().required(),
            city: Joi.string().required(),
            country: Joi.string().required()
        }),
        phone_number: Joi.array().items(Joi.string().max(12))

    });

    return schema.validate(student);
}
exports.Student = Student;
exports.studentValidation = studentValidation;