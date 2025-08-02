const { StartFunc: StartFuncToActiveEditor } = require("./ToActiveEditor/entryFile");

const StartFunc = async ({ inActiveEditorPath, inFolderNeeded }) => {
    const LocalFromActiveEditor = await StartFuncToActiveEditor({ inActiveEditorPath, inFolderNeeded });

    if (LocalFromActiveEditor === false) {

    } else {
        // const activeFileFolderPath = require('path').dirname(inActiveEditorPath);

        // if (await fse.pathExists(activeFileFolderPath)) {
        //     await StartFuncCreateHtmlIdFolder({ inCreatePath: activeFileFolderPath, inHtmlIdNeeded });
        // };
    };
};

module.exports = { StartFunc };
