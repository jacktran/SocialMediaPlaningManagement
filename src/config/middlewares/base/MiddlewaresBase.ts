import express = require("express");
import bodyParser = require("body-parser");
import path = require("path");

import BaseRoutes = require("./../../routes/base/BaseRoutes"); 


class MiddlewaresBase {
    
    static get configuration () {
         var app = express();
         app.use(bodyParser.json());
//         app.use(MethodOverride.configuration());
         app.use(new BaseRoutes().routes);
         app.use(express.static(path.join(__dirname,'../../../../','client','dist')));
        app.set('views', path.join(__dirname,'../../../../','client','src','index.html'));
        app.engine('html', require('ejs').renderFile);
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));
         return app;
    }    
}
Object.seal(MiddlewaresBase);
export = MiddlewaresBase;