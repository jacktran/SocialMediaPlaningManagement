/**
 * Created by Window on 4/15/2017.
 */
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = class Passport {
    constructor (passport) {

        this.passport = passport;

        this.passport.serializeUser(function (user , done) {
            done(null,user.id);
        });

        this.passport.deserializeUser(function (id, done) {
            User.findById(id,function (err,user) {
               done(err,user);
            });
        });

        this.passport.use(new LocalStrategy({
            userNameField :  'email',
            passwordField :  'password',
            passReqToCallBack : true

        },function (req,email,password,done) {
            User.findOne({email : email},function (err,user) {
                if(err) {
                    return done(err);
                }
                if(user) {
                    return done(null, false, { message : 'That email is already taken.'});
                }
                let newUser = new User();
                newUser.local.email = email;
                newUser.local.password = newUser.generateHash(password);
                newUser.save(function (err) {
                    if(err) {
                        throw  err;
                    }
                    return done(null,newUser);
                })
            })
        }));
    }
};