import * as mongoose from 'mongoose';

export class Database {

    constructor () {}

    public static config(option? : any) {
    	if(!option)  {
    		option = {
    			url : "mongodb://localhost/SocialPlaning",
    			options : {
    				db: { native_parser: true },
					server: { poolSize: 5 },
					replset: { rs_name: 'myReplicaSetName' },
					user: 'myUserName',
					pass: 'myPassword'
    			}
    		}
    		
    	}
    	return option;
    }

    public static connect(){
    	let config = this.config();
        mongoose.connect(config.url,null).then(
        	() => {
        		console.log("connect to database successfull"); 
        	},
        	error => {
        		console.log("connect to database failed"); 
        		console.log(error);
        	}

        );
    }
}