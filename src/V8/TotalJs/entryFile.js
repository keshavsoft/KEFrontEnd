const { StartFunc: StartFuncUrlEndPoint } = require("./EndPoint/entryFile");
const { StartFunc: StartFuncFromBoilerPlate } = require("./BoilerPlate/entryFile");

const StartFunc = () => {
    StartFuncUrlEndPoint();
    StartFuncFromBoilerPlate();
};

module.exports = { StartFunc };
