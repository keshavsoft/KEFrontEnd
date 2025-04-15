const { StartFunc: StartFuncFromStaticColumns } = require("./StaticColumns/entryFile");
const { StartFunc: StartFuncFromStRouWTName } = require("./StRouWTName/entryFile");

const StartFunc = () => {
    StartFuncFromStaticColumns();
    StartFuncFromStRouWTName();
};

module.exports = { StartFunc };
