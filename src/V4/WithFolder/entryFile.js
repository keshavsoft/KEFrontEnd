const { StartFunc: StartFromShowAllGet } = require("./ShowAllGet/entryFile");
const { StartFunc: StartFromShow } = require("./Show/entryFile");

const StartFunc = () => {
    StartFromShowAllGet();
    StartFromShow();
};

module.exports = { StartFunc };
