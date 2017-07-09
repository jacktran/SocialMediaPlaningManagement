
import express = require("express");
import CampaignController = require("../../controllers/CampaignController");

const router = express.Router();

class CampaignRoutes {

	private _campaignController: CampaignController;

	constructor () {
		this._campaignController = new CampaignController();
	}

	get routes () {
		router.get("/campaigns", this._campaignController.retrieve);
        router.post("/campaigns", this._campaignController.create);
        // router.put("/heroes/:_id", this._campaignController.update);
        // router.get("/heroes/:_id", this._campaignController.findById);
        // router.delete("/heroes/:_id", this._campaignController.delete);
        return router;
	}
}

export = CampaignRoutes;