const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const CommonRegisterCommand = "WithFolder.Delete";
const { StartFunc: StartFuncFromOpenApp } = require("./openApp");
const CommonToFolderName = "Delete";

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    try {
        const LocalFromPath = path.join(__dirname, "copyCode");
        const LocalToPath = await LocalFuncForCopyFilePath();

        await fse.copy(LocalFromPath, `${LocalToPath}/${CommonToFolderName}`);

        vscode.window.showInformationMessage(`BoilerPlate code to: ${LocalToPath}/${CommonToFolderName}`);
        // const filePath = `${LocalToPath}/app.js`;
        StartFuncFromOpenApp({ inToPath: LocalToPath });
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    };
};

const LocalFuncForCopyFilePath = async () => {
    // Try to get the currently selected folder in Explorer
    await vscode.commands.executeCommand('copyFilePath');

    const clipboardText = await vscode.env.clipboard.readText();

    if (clipboardText && (await fse.pathExists(clipboardText)) && (await fse.lstat(clipboardText)).isDirectory()) {
        return clipboardText;
    };

    return null;
};

module.exports = { StartFunc };