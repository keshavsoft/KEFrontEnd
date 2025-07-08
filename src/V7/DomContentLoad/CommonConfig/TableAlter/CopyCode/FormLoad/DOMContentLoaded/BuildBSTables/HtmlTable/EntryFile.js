import commonConfigJson from '../../../../../Config.json' with {type: 'json'};
import { StartFunc as StartFuncFromOnPostBody } from "./OnPostBody/EntryFile.js";
import { StartFunc as StartFuncFromForColumns } from "./ForColumns/entryFile.js";
import { StartFunc as StartFuncAlter } from "./onClickRow/entryFile.js";

const StartFunc = () => {
    var $table = $('#table');
    
    commonConfigJson.onPostBody = StartFuncFromOnPostBody;

    commonConfigJson.onClickRow = StartFuncAlter;

    commonConfigJson.columns = StartFuncFromForColumns({ inColumns: commonConfigJson.columns });

    $table.bootstrapTable(commonConfigJson);
};

export { StartFunc };
