const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Practice', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => console.log('connected to mongoDB...'))
    .catch((err) => console.log('Could connect to mongoDB..', err))

const coursesSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: {
        type: Array,
        //Synchronous
        // validate: {
        //     validator: function(v) {
        //         return v && v.length > 0;
        //     },
        //     message: "A course should have at least one tag."
        // }
        //
        // Asynchronous

        validate: {

            validator: function(v) {

                return new Promise(function(resolve, reject) {
                    setTimeout(() => {
                        const result = v && v.length > 0;
                        if (result) {
                            resolve();
                        } else {
                            reject(new Error('A course should have at least one tag.'))
                        }
                    }, 1000)
                })

            },
            message: "A course should have at least one tag."
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean
})

const Course = mongoose.model('Course', coursesSchema);

async function createCourse() {
    const course = new Course({
        name: 'Node.js Course',
        author: 'Faryal',
        tags: null,
        isPublished: true
    });
    try {
        const result = await course.save();
        console.log(result)
    } catch (err) {
        console.log(err.message)
    }
};
createCourse()


async function getCourses() {
    const courses = await Course.find({
        _id: '5f17da8b2059b01b4cc2a5e1',
        author: 'Faryal'
    });
    console.log(courses)
};
getCourses();