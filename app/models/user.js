/**
 * Created by Window on 4/15/2017.
 */
const bcrypt   = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    local : {
        username : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        }
    }
});

userSchema.methods.getUserByField =  function (fields) {
    let query = {
        'username' : fields.username
    };
    UserModel.findOne(query,function (err,user) {
        if(err) {
            return err;
        }
        return user;
    });
};

userSchema.methods.generateHash = function () {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function () {
    return bcrypt.compareSync(password, this.local.password);
};

const UserModel = mongoose.model("Account",userSchema);

module.exports = UserModel;