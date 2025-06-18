const { StartFunc: StartFuncUrlEndPoint } = require("./EndPoint/entryFile");

const StartFunc = () => {
    StartFuncUrlEndPoint();
};

module.exports = { StartFunc };
