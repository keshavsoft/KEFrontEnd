import { StartFunc as StartFuncFromAddListeners } from "./AddListeners/entryFile.js";
import { StartFunc as StartFuncFromBuildBSTable } from "./BuildBSTable/entryFile.js";
import { StartFunc as StartFuncFromShowOnDom } from "./showOnDom.js";

let StartFunc = () => {
    StartFuncFromAddListeners();
    StartFuncFromBuildBSTable();
    StartFuncFromShowOnDom();
};

export { StartFunc };