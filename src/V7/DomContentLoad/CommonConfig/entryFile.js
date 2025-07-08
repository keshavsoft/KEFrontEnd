const { StartFunc: StartFuncFromCreateNoValid } = require("./CreateNoValid/entryFile");
const { StartFunc: StartFuncFromTableWithCrud } = require("./TableWithCrud/entryFile");
const { StartFunc: StartFuncFromTableShow } = require("./TableShow/entryFile");

const StartFunc = () => {
    StartFuncFromCreateNoValid();
    StartFuncFromTableWithCrud();
    StartFuncFromTableShow();
};

module.exports = { StartFunc };
