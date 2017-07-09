import ICampaignBusiness = require("./interfaces/ICampaignBusiness");
import CampaignRepository = require("../respository/CampaignRepository");
import ICampaignModel = require("../model/interfaces/ICampaignModel");


export class CampaignBusiness implements ICampaignBusiness {

	private _campaignRepository : CampaignRepository;

	constructor () {
		this._campaignRepository = new CampaignRepository();
	}

	 create (item: ICampaignModel, callback: (error: any, result: any) => void) {
        this._campaignRepository.create(item, callback);   
    }
   
    retrieve (callback: (error: any, result: any) => void) {
         this._campaignRepository.retrieve(callback);
    }
    
    update (_id: string, item: ICampaignModel, callback: (error: any, result: any) => void) {
        
        this._campaignRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);
            
            else 
                this._campaignRepository.update(res._id, item, callback);
               
        });    
    }
    
    delete (_id: string, callback:(error: any, result: any) => void) {
        this._campaignRepository.delete(_id , callback);
    }
    
    findById (_id: string, callback: (error: any, result: ICampaignModel) => void) {
        this._campaignRepository.findById(_id, callback);
    }
}