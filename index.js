const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv').config();
const { storage } = require('./config/multer.config');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/database.config'); 
const multer = require('multer')


const PORT = 8000;
const app = express();

app.use(cors({
    origin:['http://localhost:3000', 'https://safwanspehere.online'],
    credentials: true,
    methods: "GET, POST, PUT, DELETE"
}))

app.use(express.json());
app.use(cookieParser());
app.use("/images", express.static(path.join(__dirname, "/images")));

const upload = multer({ storage })
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("Image has been uploaded successfully!");
});

app.get('/hello', (req, res) => {
    res.status(200).json({message: "Hello"})
})

app.use('/', require('./routes/index'))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
