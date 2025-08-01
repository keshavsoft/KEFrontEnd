const { StartFunc: StartClientSide } = require("./AddListeners/entryFile");
const { StartFunc: StartFuncFromWithFolder } = require("./WithFolder/entryFile");
const { StartFunc: StartFuncFromCalendar } = require("./Calendar/entryFile");
const { StartFunc: StartFuncFromInputShow } = require("./FromInput/Show/entryFile");
const { StartFunc: StartFuncTotalJs } = require("./TotalJs/entryFile");
const { StartFunc: StartFuncDomLoad } = require("./DomLoad/entryFile");
const { StartFunc: StartFuncSubTable } = require("./SubTable/entryFile");
const { StartFunc: StartFuncFromDomContentLoad } = require("./DomContentLoad/entryFile");

const StartFunc = () => {
    StartClientSide();
    StartFuncFromWithFolder();
    StartFuncFromCalendar();
    StartFuncFromInputShow();
    StartFuncTotalJs();
    StartFuncDomLoad();
    StartFuncSubTable();
    StartFuncFromDomContentLoad();
};

module.exports = { StartFunc };