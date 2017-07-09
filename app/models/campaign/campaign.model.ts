import * as mongoose from 'mongoose';
export let Schema = mongoose.Schema;
import  { ICampaigns } from './campaign';

const  subActionSchema = new Schema({
    setting : {
        timeout : {
            value : Number
        },
        retryQuota : {
            value : Number
        },
    },
    executor : {
        selector : {
            type : String
        },
        value: {
            type : String
        },
        name : {
            type : String
        },
        isScreenshot : {
            type : Boolean
        }
    }
});


const actionSchema = new Schema({
    name : {
        type :  String,
        required : true,
    },
    note : {
        type : String,
    },
    status : {
        type : String,
        required : true
    },
    subs : [subActionSchema]
});

const pageSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true
    },
    url : {
        type : String,
        required : false
    },
    browserSetting : {
        userAgent : String,
    },
    browserProperty : {
        viewportSize :  Schema.Types.Mixed
    },
    actions : [actionSchema]
});

const campaignSchema = new Schema({
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
    pages : [pageSchema]
});

const campaignsSchema = new Schema({
    userId : {
        type : String,
        required : false
    },
    campaigns : [campaignSchema]
});

campaignsSchema.methods.getByUserId = function(userId) {
    this.model('Campaign').fin
}

const Campaigns = mongoose.model("Campaigns",campaignsSchema);
export  default Campaigns;