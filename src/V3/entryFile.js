const { StartFunc: StartClientSide } = require("./AddListeners/entryFile");

const StartFunc = () => {
    StartClientSide();
};

module.exports = { StartFunc };