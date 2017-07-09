/**
 * Created by Window on 6/26/2017.
 */

export class ErrorParser {
    constructor() {}

    static get (error)  {
        let outputError = [];
        if(error && error.errors) {
            for(let key in error.errors) {
                outputError.push({
                    field : key,
                    message : error.errors[key].message
                })
            }
        }

        return outputError;
    }
}







