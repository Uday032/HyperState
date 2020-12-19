const fs = require('fs');
const express = require("express");

module.exports = function (app) {
    
    app.get('/displayimages', (req, res) => {
        // var filespath = []
        fs.readdir('./uploads/images/', function (err, files) {
            if (err) {
                res.send("Error retriving files");
            }
            res.send(files);
        })
    });

    app.get('/displayvideos', (req, res) => {
        // var filespath = []
        fs.readdir('./uploads/videos/', function (err, files) {
            if (err) {
                res.send("Error retriving files");
            }
            res.send(files);
        })
    });

}