import DataAccess = require("./../../dataAccess/DataAccess");
import ICampaignModel = require("./../../model/interfaces/ICampaignModel");

const mongooose = DataAccess.mongooseInstance;
const mongooseConection = DataAccess.mongooseConnection;

class CampaignSchema  {

	static get schema () {
		var schema = mongooose.Schema({
			status : {
     			type : String,
        		required : true
    		},
    		name : {
        		type : String,
        		required : false
    		},
    		note : {
        		type : String,
        		required : false 
    		},
		});	

		return  schema;
	}
}

const schema = mongooseConection.model<ICampaignModel>("Campaigns", CampaignSchema.schema);
export = schema;