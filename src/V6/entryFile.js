const { StartFunc: StartClientSide } = require("./AddListeners/entryFile");
const { StartFunc: StartFuncFromWithFolder } = require("./WithFolder/entryFile");
const { StartFunc: StartFuncFromCalendar } = require("./Calendar/entryFile");
const { StartFunc: StartFuncFromInputShow } = require("./FromInput/Show/entryFile");
const { StartFunc: StartFuncTotalJs } = require("./TotalJs/entryFile");

const StartFunc = () => {
    StartClientSide();
    StartFuncFromWithFolder();
    StartFuncFromCalendar();
    StartFuncFromInputShow();
    StartFuncTotalJs();
};

module.exports = { StartFunc };