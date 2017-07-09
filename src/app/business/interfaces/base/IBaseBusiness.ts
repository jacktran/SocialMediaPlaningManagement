import IRead = require("./../common/IRead");
import IWrite = require("./../common/IWrite");

interface IBaseBusiness<T> extends IRead<T>, IWrite<T> {}

export = IBaseBusiness;