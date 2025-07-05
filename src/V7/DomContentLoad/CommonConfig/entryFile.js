const { StartFunc: StartFuncFromCreateNoValid } = require("./CreateNoValid/entryFile");

const StartFunc = () => {
    StartFuncFromCreateNoValid();
};

module.exports = { StartFunc };
