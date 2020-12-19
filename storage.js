const multer = require("multer");
const path = require("path");

const imagestorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/images/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const videostorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/videos/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

exports.imagestorage = imagestorage;
exports.videostorage = videostorage;