"use strict";
var mongoose = require("mongoose");
var RespositoryBase = (function () {
    function RespositoryBase(schemaModel) {
        this._model = schemaModel;
    }
    RespositoryBase.prototype.create = function (item, callback) {
        this._model.create(item, callback);
    };
    RespositoryBase.prototype.retrieve = function (callback) {
        this._model.find({}, callback);
    };
    RespositoryBase.prototype.update = function (_id, item, callback) {
        this._model.update({ _id: _id }, item, callback);
    };
    RespositoryBase.prototype.delete = function (_id, callback) {
        this._model.remove({ _id: this.toObjectId(_id) }, function (err) { return callback(err, null); });
    };
    RespositoryBase.prototype.findById = function (_id, callback) {
        this._model.findById(_id, callback);
    };
    RespositoryBase.prototype.toObjectId = function (_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    };
    return RespositoryBase;
}());
module.exports = RespositoryBase;
