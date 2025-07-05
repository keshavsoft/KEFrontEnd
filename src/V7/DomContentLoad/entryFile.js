const { StartFunc: StartFuncFromCommonConfig } = require("./CommonConfig/entryFile");

const StartFunc = () => {
    StartFuncFromCommonConfig();
};

module.exports = { StartFunc };
