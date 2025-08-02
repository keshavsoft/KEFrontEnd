const { StartFunc: StartFuncFromAsGet } = require("./AsGet/entryFile");

const StartFunc = () => {
    StartFuncFromAsGet();
};

module.exports = { StartFunc };
