(function () {
    var path = require('path')
    var fs = require('fs')
    var express = require('express')
    if (!process.env.NODE_ENV)
        process.env.NODE_ENV = "development";
    process.env.rootdir = path.dirname(__filename);

    global.log4jsConfig = JSON.parse(fs.readFileSync(path.join(__dirname, './config', 'log4js.json')));
    global.config = JSON.parse(fs.readFileSync(path.join(__dirname, './config', 'config.sample.json')));
    var app = require('./backend/app')();
})();
