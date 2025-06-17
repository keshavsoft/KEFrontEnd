import { StartFunc as StartFuncBuildBsTable } from "./BuildBSTables/EntryFile.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";

const StartFunc = () => {
    StartFuncBuildBsTable();
    StartFuncAddListeners();
};

export { StartFunc };
