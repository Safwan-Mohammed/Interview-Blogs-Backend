const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://safwan:safwan@cluster0.4uiey.mongodb.net/Blogs/")
        console.log("Database Connection Esatblished ");
    }catch(error){
        console.log("Index file DB error ", error);
    }
}

connectDB()

module.exports = connectDB