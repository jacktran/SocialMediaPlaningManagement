"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var BaseRoutes = require("./../../routes/base/BaseRoutes");
var MiddlewaresBase = (function () {
    function MiddlewaresBase() {
    }
    Object.defineProperty(MiddlewaresBase, "configuration", {
        get: function () {
            var app = express();
            app.use(bodyParser.json());
            //         app.use(MethodOverride.configuration());
            app.use(new BaseRoutes().routes);
            app.use(express.static(path.join(__dirname, '../../../../', 'client', 'dist')));
            app.set('views', path.join(__dirname, '../../../../', 'client', 'src', 'index.html'));
            app.engine('html', require('ejs').renderFile);
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({
                extended: true
            }));
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return MiddlewaresBase;
}());
Object.seal(MiddlewaresBase);
module.exports = MiddlewaresBase;
