import express = require("express");
import IBaseController = require("./interfaces/base/IBaseController");

class  CampaignController implements IBaseController {
	constructor() {
	}

	retrieve(req: express.Request, res: express.Response): void {}

	update(req: express.Request, res: express.Response): void {}

	delete(req: express.Request, res: express.Response): void {}

	findById(req: express.Request, res: express.Response): void {}

	create(req: express.Request, res: express.Response): void {}

}

export = CampaignController;