const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const CommonRegisterCommand = "DomLoaded.SubTableInsert";
const { StartFunc: StartFuncFromOpenApp } = require("./openApp");

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    try {
        const userInputFolderName = await vscode.window.showInputBox({
            prompt: 'Enter the new folder name to create',
            placeHolder: 'Enter Folder Name'
        });

        if (!userInputFolderName) throw new Error("Folder name not provided.");
        const sanitizedFolderName = userInputFolderName.trim().replace(/[<>:"/\\|?*]+/g, "_");

        const userInputURL = await vscode.window.showInputBox({
            prompt: 'Enter Row Data End Point',
            placeHolder: 'Enter Row Data End Point: /api/your-RowData'
        });

        if (!userInputURL) throw new Error("Row Data End Point Not Provided.");


        const jVarPostEndPoint = await vscode.window.showInputBox({
            prompt: 'Enter Post End Point',
            placeHolder: 'Enter Post End Point: /api/your-PostEndPoint'
        });

        if (!jVarPostEndPoint) throw new Error("Post End Point Not Provided")


        const jVarGetEndPoint = await vscode.window.showInputBox({
            prompt: 'Enter Get End Point',
            placeHolder: 'Enter Get End Point: /api/your-GetEndPoint'
        });

        if (!jVarGetEndPoint) throw new Error("Get End Point Not Provided")


        const jVarAlterEndPoint = await vscode.window.showInputBox({
            prompt: 'Enter Alter End Point',
            place: 'Enter Alter End Point: /api/your-AlterEndPoint'
        })

        if (!jVarAlterEndPoint) throw new Error("Alter End Point Not Provided")


        const jVarSubTableRowData = await vscode.window.showInputBox({
            prompt: 'Enter SubTable RowData End Point',
            place: 'Enter SubTable RowData End Point: /api/your-SubTableRowData'
        })

        if (!jVarSubTableRowData) throw new Error("Alter End Point Not Provided")

        const jVarDeleteEndPoint = await vscode.window.showInputBox({
            prompt: 'Enter Delete End Point',
            place: 'Enter Delete End Point: /api/your-DeleteEndPoint'
        })

        if (!jVarDeleteEndPoint) throw new Error("Alter End Point Not Provided")

        const LocalFromPath = path.join(__dirname, "copyCode");
        const LocalToPath = await LocalFuncForCopyFilePath();

        if (!LocalToPath) {
            vscode.window.showErrorMessage("No valid folder selected. Please copy a folder path to the clipboard (Right-click → Copy Path).");
            return;
        }

        const FinalDestinationPath = path.join(LocalToPath, sanitizedFolderName);

        await fse.copy(LocalFromPath, FinalDestinationPath);

        const configPath = path.join(FinalDestinationPath, "config.json");

        await fse.writeJson(configPath, {
            RowData: userInputURL,
            PostendPoint: jVarPostEndPoint,
            GetEndPoint: jVarGetEndPoint,
            AlterEndPoint: jVarAlterEndPoint,
            SubTableRowData: jVarSubTableRowData,
            DeleteEndPoint: jVarDeleteEndPoint
        });

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
