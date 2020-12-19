const path = require('path');
const multer = require("multer");
const helpers = require('../helper');
const storage = require('../storage');

module.exports = function (app) { 

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../index.html'));
    });

    app.post('/upload-images', (req, res) => {
        // 10 is the limit I've defined for number of uploaded files at once
        // 'multiple_images' is the name of our file input field
        let upload = multer({
            storage: storage.storage,
            fileFilter: helpers.imageFilter
        }).array('multiple_images', 10);

        upload(req, res, function (err) {
            if (req.fileValidationError) {
                return res.send(req.fileValidationError);
            } 

            let result = "You have uploaded these images: <hr />";
            const files = req.files;
            let index, len;

            // Loop through all the uploaded images and display them on frontend
            for (index = 0, len = files.length; index < len; ++index) {
                result += `<img src="${files[index].path}" width="300" style="margin-right: 20px;">`;
            }
            result += '<hr/><a href="./">Upload more images</a>';
            res.send("uploaded");
        });
    });
}