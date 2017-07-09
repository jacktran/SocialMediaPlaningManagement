"use strict";
var express = require("express");
var CampaignRoutes = require("../CampaignRoutes");
var path = require("path");
var app = express();
var BaseRoutes = (function () {
    function BaseRoutes() {
    }
    Object.defineProperty(BaseRoutes.prototype, "routes", {
        get: function () {
            app.use("/", new CampaignRoutes().routes);
            var getViewPath = function (name) {
                return path.join(__dirname, '../../../../', 'client', 'dist', 'index.html');
            };
            console.log(path.resolve(__dirname));
            app.get('/', function (req, res) {
                res.sendfile(getViewPath('index.html'));
            });
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRoutes;
}());
module.exports = BaseRoutes;
