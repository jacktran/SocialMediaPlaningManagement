export interface ICampaigns {
    userId : string,
    campaigns : [ICampaign]
}

interface ICampaign {
    status : string,
    name : string,
    note : string,
    pages : [IPage]
}

interface IPage {
    name : string,
    status : string,
    url : string,
    browserSetting : string,
    browserProperty : string,
    actions : [IAction]
}

interface  IAction {
    name : string,
    note : string,
    status :string,
    subs : [ISubAction]
}

interface ISubAction {
    setting : {
        timeout : number,
        retryQuota : number,
    },
    executor : {
        selector : string,
        value: string,
        name : string,
        isScreenshot : boolean
    }
}