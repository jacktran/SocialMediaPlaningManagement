import { CampaignController } from '../controllers/campaign.controller';

 class CampaignRouter {

     private campaignController  : any;

    constructor () {

        this.campaignController = new CampaignController();
    }

    public setRoute () : void {
        let express = require('express');
        let router = express.Router();
        router.get('/',function (req,res,next) {
            console.log("campaign router is ok ");
            next();
        });

        router.post('/',this.campaignController.save);

        return router;
    }

}
export  default new CampaignRouter().setRoute();


