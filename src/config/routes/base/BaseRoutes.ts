import express = require("express");
import CampaignRoutes = require("../CampaignRoutes");
import path = require("path");

const app = express();

class BaseRoutes {

	constructor(){}

    get routes() {
        app.use("/", new CampaignRoutes().routes);

        let getViewPath = function (name) {
            return path.join(__dirname,'../../../../','client','dist','index.html');
        };
        console.log(path.resolve(__dirname));


        app.get('/',function (req,res) {
            res.sendfile(getViewPath('index.html'));
        });

        return app;
    }
}
export = BaseRoutes;
