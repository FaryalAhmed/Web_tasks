const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number,

})

const Course = mongoose.model('Course', courseSchema);


async function getCourses() {
    const result = await Course.find({
            isPublished: true,
            tags: { $in: ['frontend', 'backend'] }

        })
        .sort({
            price: -1
        })
        .select({ name: 1, author: 1, price: 1 })
    console.log(result)
};
getCourses();