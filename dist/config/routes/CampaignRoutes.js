"use strict";
var express = require("express");
var CampaignController = require("../../controllers/CampaignController");
var router = express.Router();
var CampaignRoutes = (function () {
    function CampaignRoutes() {
        this._campaignController = new CampaignController();
    }
    Object.defineProperty(CampaignRoutes.prototype, "routes", {
        get: function () {
            router.get("/campaigns", this._campaignController.retrieve);
            router.post("/campaigns", this._campaignController.create);
            // router.put("/heroes/:_id", this._campaignController.update);
            // router.get("/heroes/:_id", this._campaignController.findById);
            // router.delete("/heroes/:_id", this._campaignController.delete);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return CampaignRoutes;
}());
module.exports = CampaignRoutes;
