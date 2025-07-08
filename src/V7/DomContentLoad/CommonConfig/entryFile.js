const { StartFunc: StartFuncFromCreateNoValid } = require("./CreateNoValid/entryFile");
const { StartFunc: StartFuncFromTableWithCrud } = require("./TableWithCrud/entryFile");
const { StartFunc: StartFuncFromTableShow } = require("./TableShow/entryFile");
const { StartFunc: StartFuncFromTableAlter } = require("./TableAlter/entryFile");

const StartFunc = () => {
    StartFuncFromCreateNoValid();
    StartFuncFromTableWithCrud();
    StartFuncFromTableShow();
    StartFuncFromTableAlter();
};

module.exports = { StartFunc };
