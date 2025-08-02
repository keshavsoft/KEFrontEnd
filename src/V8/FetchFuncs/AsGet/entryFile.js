const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const CommonRegisterCommand = "FetchFuncs.AsGet";
// const { StartFunc: StartFuncFromOpenApp } = require("./openApp");
const { StartFunc: StartFuncFromAlterFile } = require("./AlterFile/entryFile");

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    try {
        const LocalFromPath = path.join(__dirname, "copyCode");
        const LocalToPath = await LocalFuncGetActiveEditorPath();

        await fse.copy(LocalFromPath, LocalToPath);

        StartFuncFromAlterFile({
            inActiveEditorPath: LocalFuncGetActiveEditor(),
            inFolderNeeded: "FetchAsGet"
        });

        vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}`);
        // const filePath = `${LocalToPath}/app.js`;
        // StartFuncFromOpenApp({ inToPath: LocalFuncGetActiveEditor() });
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

const LocalFuncGetActiveEditorPath = async () => {
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
        const activeFilePath = activeEditor.document.uri.fsPath;
        const activeFileFolderPath = require('path').dirname(activeFilePath);

        if (await fse.pathExists(activeFileFolderPath)) {
            return activeFileFolderPath;
        };
    };

    // If no folder or active file is found, return null
    return null;
};

const LocalFuncGetActiveEditor = () => {
    const activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
        const activeFilePath = activeEditor.document.uri.fsPath;

        return activeFilePath;
    };

    // If no folder or active file is found, return null
    return null;
};

module.exports = { StartFunc };