const { StartFunc: StartClientSide } = require("./AddListeners/entryFile");
const { StartFunc: StartFuncFromWithFolder } = require("./WithFolder/entryFile");
const { StartFunc: StartFuncFromCalendar } = require("./Calendar/entryFile");

const StartFunc = () => {
    StartClientSide();
    StartFuncFromWithFolder();
    StartFuncFromCalendar();
};

module.exports = { StartFunc };