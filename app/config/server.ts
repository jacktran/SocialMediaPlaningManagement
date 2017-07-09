"use strict";

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import   CampaignRouter  from '../routers/campaign.router';
import  { Database }  from './database';



/**
 * The server.
 *
 * @class Server
 */
export class Server {

    public app: express.Application;
    public port : number = 3001;


    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        //create expressjs application
        this.app = express();

        //configure application
        this.config();

        //add routes
        this.routes();

        //add api
        this.api();

        Database.connect();
    }

    /**
     * Create router
     *
     * @class Server
     * @method api
     */
    private routes() : void {
        this.app.all('/app/*',function (req,res) {

            // if user is authenticated in the session, carry on
            if (!req.isAuthenticated()) {
                //res.send();
                return;
            }

            next();
            // if they aren't redirect them to the sign in page

            //res.redirect('/signin');
        });

        let getViewPath = function (name) {
            return path.join(__dirname,'../../','client','dist','index.html');
        };


        this.app.get('/',function (req,res) {
            res.sendfile(getViewPath('index.html'));
        });

        this.app.get('/signin',function (req,res,next) {
            res.sendfile(getViewPath('login.html'));
            next();
        });

        this.app.use('/campaigns',CampaignRouter);
    }

    /**
     * Create REST API routes
     *
     * @class Server
     * @method api
     */
    public api() {
        //empty for now
    }



    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    public config() {
        this.app.use(express.static(path.join(__dirname,'../../','client','dist')));
        this.app.set('views', path.join(__dirname,'../../','client','src','index.html'));
        this.app.engine('html', require('ejs').renderFile);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        // this.app.use(session({
        //     secret : "app-session",
        //     resave: false,
        //     saveUninitialized: true,
        //     cookie: { secure: true }
        // }));
        //
        // this.app.use(passport.initialize());
        // this.app.use(passport.session());
        // this.app.use(flash());

        //require('./router')(app,passport);



        this.app.listen(this.port, () => {
            console.log(`port ${this.port} is listing`);
        });
    }

    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    public static bootstrap(): Server {

        // const port = 3001;
        //
        // this.app.listen(port,function () {
        //     console.log("port " +  port +" is listing");
        // });
        return new Server();
    }
}