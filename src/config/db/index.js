/** @format */

const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to DB successfully');
    } catch (error) {
        console.log('Connected to DB failed');
    }
}

module.exports = {connect};
