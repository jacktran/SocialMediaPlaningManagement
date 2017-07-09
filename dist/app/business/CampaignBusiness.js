"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CampaignRepository = require("../respository/CampaignRepository");
var CampaignBusiness = (function () {
    function CampaignBusiness() {
        this._campaignRepository = new CampaignRepository();
    }
    CampaignBusiness.prototype.create = function (item, callback) {
        this._campaignRepository.create(item, callback);
    };
    CampaignBusiness.prototype.retrieve = function (callback) {
        this._campaignRepository.retrieve(callback);
    };
    CampaignBusiness.prototype.update = function (_id, item, callback) {
        var _this = this;
        this._campaignRepository.findById(_id, function (err, res) {
            if (err)
                callback(err, res);
            else
                _this._campaignRepository.update(res._id, item, callback);
        });
    };
    CampaignBusiness.prototype.delete = function (_id, callback) {
        this._campaignRepository.delete(_id, callback);
    };
    CampaignBusiness.prototype.findById = function (_id, callback) {
        this._campaignRepository.findById(_id, callback);
    };
    return CampaignBusiness;
}());
exports.CampaignBusiness = CampaignBusiness;
