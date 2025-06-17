const { StartFunc: StartFromShowAllGet } = require("./ShowAllGet/entryFile");
const { StartFunc: StartFromShow } = require("./Show/entryFile");
const { StartFunc: StartInsertFooter } = require("./Crud/entryFile");
const StartFunc = () => {
    StartFromShowAllGet();
    StartFromShow();
    StartInsertFooter();
};

module.exports = { StartFunc };
