"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var campaign_router_1 = require("./routers/campaign.router");
/**
 * The server.
 *
 * @class Server
 */
var Server = (function () {
    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    function Server() {
        this.port = 3001;
        //create expressjs application
        this.app = express();
        //configure application
        this.config();
        //add routes
        this.routes();
        //add api
        this.api();
    }
    /**
     * Create router
     *
     * @class Server
     * @method api
     */
    Server.prototype.routes = function () {
        this.app.all('/app/*', function (req, res) {
            // if user is authenticated in the session, carry on
            if (!req.isAuthenticated()) {
                //res.send();
                return;
            }
            next();
            // if they aren't redirect them to the sign in page
            //res.redirect('/signin');
        });
        var getViewPath = function (name) {
            return path.join(__dirname, '../', 'client', 'dist', 'index.html');
        };
        this.app.get('/', function (req, res) {
            res.sendfile(getViewPath('index.html'));
        });
        this.app.get('/signin', function (req, res, next) {
            res.sendfile(getViewPath('login.html'));
            next();
        });
        this.app.use('/campaigns', campaign_router_1.default);
    };
    /**
     * Create REST API routes
     *
     * @class Server
     * @method api
     */
    Server.prototype.api = function () {
        //empty for now
    };
    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    Server.prototype.config = function () {
        var _this = this;
        this.app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));
        this.app.set('views', path.join(__dirname, '../', 'client', 'src', 'index.html'));
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
        this.app.listen(this.port, function () {
            console.log("port " + _this.port + " is listing");
        });
    };
    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    Server.bootstrap = function () {
        // const port = 3001;
        //
        // this.app.listen(port,function () {
        //     console.log("port " +  port +" is listing");
        // });
        return new Server();
    };
    return Server;
}());
exports.Server = Server;
