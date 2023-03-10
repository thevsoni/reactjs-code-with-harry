const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/inotebook';

async function main() {
    mongoose.connect(mongoURI);

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = main;
