const { StartFunc: StartFuncFromCreateNoValid } = require("./CreateNoValid/entryFile");
const { StartFunc: StartFuncFromTableWithCrud } = require("./TableWithCrud/entryFile");

const StartFunc = () => {
    StartFuncFromCreateNoValid();
    StartFuncFromTableWithCrud();
};

module.exports = { StartFunc };
