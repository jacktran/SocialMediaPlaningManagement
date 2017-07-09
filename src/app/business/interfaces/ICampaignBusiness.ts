
import IBaseBusiness = require("./base/IBaseBusiness");
import ICampaignModel = require("../../model/interfaces/ICampaignModel");

interface ICampaignBusiness extends IBaseBusiness<ICampaignModel> {}

export =  ICampaignBusiness;