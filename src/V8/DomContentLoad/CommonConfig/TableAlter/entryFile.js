const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const CommonRegisterCommand = `DomContentLoad.CommonConfig.TableAlter`;

const { StartFunc: StartFuncFromOpenApp } = require("./openApp");

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    try {
        const userInputFolderName = await vscode.window.showInputBox({
            prompt: 'Enter the folder name',
            placeHolder: 'Enter the folder name',
        });

        if (!userInputFolderName) throw new Error('Folder name was not provided.');

        const LocalFromPath = path.join(__dirname, "copyCode");
        const LocalToPath = await LocalFuncForCopyFilePath();

        if (!LocalToPath) {
            vscode.window.showErrorMessage("No valid folder selected. Please copy a folder path to the clipboard (Right-click → Copy Path).");
            return;
        }

        const FinalDestinationPath = path.join(LocalToPath, userInputFolderName);

        await fse.copy(LocalFromPath, FinalDestinationPath);

        vscode.window.showInformationMessage(`Boilerplate code copied to: ${FinalDestinationPath}`);
        StartFuncFromOpenApp({ inToPath: LocalToPath });

    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    }
};

const LocalFuncForCopyFilePath = async () => {
    await vscode.commands.executeCommand('copyFilePath');
    const clipboardText = await vscode.env.clipboard.readText();

    if (
        clipboardText &&
        (await fse.pathExists(clipboardText)) &&
        (await fse.lstat(clipboardText)).isDirectory()
    ) {
        return clipboardText;
    }

    return null;
};

module.exports = { StartFunc };
