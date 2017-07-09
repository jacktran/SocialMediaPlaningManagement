import mongoose = require("mongoose");

interface ICampaignModel extends mongoose.Document {
	_id : string,
	status : string,
	name : string,
	note? : string,
}

export = ICampaignModel;
