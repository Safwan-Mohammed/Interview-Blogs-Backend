const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, fn) => {
    fn(null, "images");
  },
  filename: (req, file, fn) => {
    fn(null, req.body.img);
  }
});

const upload = multer({storage : storage})

module.exports = upload;