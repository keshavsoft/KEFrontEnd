const { StartFunc: StartFromSubTableShow } = require("./SubTableShow/entryFile");
const { StartFunc: StartFromSubTableInsert } = require("./SubTableInsert/entryFile");

const StartFunc = () => {
    StartFromSubTableShow();
    StartFromSubTableInsert();
};

module.exports = { StartFunc };
