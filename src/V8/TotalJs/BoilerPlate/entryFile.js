const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const CommonRegisterCommand = "TotalJs.BoilerPlate";
const { StartFunc: StartFuncFromOpenApp } = require("./openApp");

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    try {
        const LocalFromPath = path.join(__dirname, "copyCode");
        const LocalToPath = await LocalFuncForFolder();

        await fse.copy(LocalFromPath, LocalToPath);

        LocalFuncOpenEntryFile({ inToPath: LocalToPath });

        vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}`);
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

const LocalFuncOpenEntryFile = ({ inToPath }) => {
    const filePath = `${inToPath}/entryFile.js`;
    StartFuncFromOpenApp({ inToPath: filePath });
};

const LocalFuncGetActiveEditor = async () => {
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

const LocalFuncForFolder = async () => {
    // Try to get the currently selected folder in Explorer
    await vscode.commands.executeCommand('copyFilePath');

    const clipboardText = await vscode.env.clipboard.readText();

    if (clipboardText && (await fse.pathExists(clipboardText)) && (await fse.lstat(clipboardText)).isDirectory()) {
        return clipboardText;
    };

    return null;
};

module.exports = { StartFunc };