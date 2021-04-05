const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});


const courseSchema = new mongoose.Schema({
    _id: String,
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number,

});
const Course = mongoose.model('Course', courseSchema);
async function updateCourse(id) {
    const course = await Course.findById(id, function(err, docs) {
        if (err) {
            console.log(err);
        } else {
            console.log("Result : ", docs);
        }
    });


    course.set({
        isPublished: true,
        author: 'Another Author'

    });
    const result = await course.save();
    console.log(result);

};
updateCourse('5a68fe2142ae6a6482c4c9cb')