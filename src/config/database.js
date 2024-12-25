const mongoose = require('mongoose');

const connectDB = async () => {
 await mongoose.connect(
    "mongodb+srv://aniljoshi7340:6RDXUKCgsiTSZodB@firstcluster.qftvl.mongodb.net/DevTinder"
 )
}

module.exports = connectDB;