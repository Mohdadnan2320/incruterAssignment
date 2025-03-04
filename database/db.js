const mongoose = require('mongoose');

exports.connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error(error)
    }
}