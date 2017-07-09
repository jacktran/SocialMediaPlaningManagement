"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RespositoryBase = require("./base/RepositoryBase");
var CampaignSchema = require("../dataAccess/schemas/CampaignSchema");
var CampaginRepository = (function (_super) {
    __extends(CampaginRepository, _super);
    function CampaginRepository() {
        return _super.call(this, CampaignSchema) || this;
    }
    return CampaginRepository;
}(RespositoryBase));
module.exports = CampaginRepository;
