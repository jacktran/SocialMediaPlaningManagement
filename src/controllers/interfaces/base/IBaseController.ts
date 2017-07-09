import IReadComtroller  = require("../common/IReadComtroller");
import IWriteController  = require("../common/IWriteController");


interface IBaseController  extends IReadComtroller , IWriteController{

}

export = IBaseController;