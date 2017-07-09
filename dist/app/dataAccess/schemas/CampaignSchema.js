"use strict";
var DataAccess = require("./../../dataAccess/DataAccess");
var mongooose = DataAccess.mongooseInstance;
var mongooseConection = DataAccess.mongooseConnection;
var CampaignSchema = (function () {
    function CampaignSchema() {
    }
    Object.defineProperty(CampaignSchema, "schema", {
        get: function () {
            var schema = mongooose.Schema({
                status: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: false
                },
                note: {
                    type: String,
                    required: false
                },
            });
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return CampaignSchema;
}());
var schema = mongooseConection.model("Campaigns", CampaignSchema.schema);
module.exports = schema;
