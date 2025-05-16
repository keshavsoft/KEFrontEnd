const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const CommonRegisterCommand = "Calendar.ShowAllGet";
const { StartFunc: StartFuncFromOpenApp } = require("./openApp");

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    try {
        const LocalFromPath = path.join(__dirname, "copyCode");
        const LocalToPath = await LocalFuncFromClipboard();

        await fse.copy(LocalFromPath, `${LocalToPath}/ShowAllGet`);

        vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}`);
        // const filePath = `${LocalToPath}/app.js`;
        StartFuncFromOpenApp({ inToPath: LocalToPath });
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

const LocalFuncFromClipboard = async () => {
    await vscode.commands.executeCommand('copyFilePath');

    const clipboardText = await vscode.env.clipboard.readText();

    if (clipboardText && (await fse.pathExists(clipboardText)) && (await fse.lstat(clipboardText)).isDirectory()) {
        return clipboardText;
    };
    return null;
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

module.exports = { StartFunc };