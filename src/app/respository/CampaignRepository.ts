import RespositoryBase  = require("./base/RepositoryBase");
import ICampaignRepository = require("../respository/interfaces/campaign/ICampaignRepository");

import ICampaign = require("../model/interfaces/ICampaignModel");
import CampaignSchema = require("../dataAccess/schemas/CampaignSchema");

class CampaginRepository extends RespositoryBase<ICampaign> implements ICampaignRepository{ 
	constructor() {
		super(CampaignSchema);
	}
}

export = CampaginRepository;