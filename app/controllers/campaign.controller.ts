import  Campaigns from '../models/campaign/campaign.model';
import  { ErrorParser } from '../utils/errorParser';

export class CampaignController {

    constructor(){}

    public save (request, response) {
        let campaign = new Campaigns(request.body);
        let errors =  ErrorParser.get(campaign.validateSync());
        if( errors.length > 0 ) {
            response.send(JSON.stringify(errors));
        } else {
            campaign.save().then(()=>{
                console.log("save campaign sucessfull");
            });
        }
    }
}


