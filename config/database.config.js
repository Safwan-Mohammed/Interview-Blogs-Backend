const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL)
        console.log("Database Connection Esatblished ");
    }catch(error){
        console.log("Index file DB error ", error);
    }
}

connectDB()

module.exports = connectDB