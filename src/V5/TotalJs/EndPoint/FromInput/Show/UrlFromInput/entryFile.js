const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const { getSelectedFolderPath } = require('../../../../../../CommonFuncs/getSelectedFolderPath');
const CommonRegisterCommand = "TotalJs.EndPoint.FromInput.Show";

const StartFunc = () => {
    activateFunc();
};

const activateFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    try {
        const selectedFolder = await getSelectedFolderPath();
        if (!selectedFolder) throw new Error('No folder selected, and no active file found in the workspace.');

        const LocalCustomFolderName = await vscode.window.showInputBox({
            prompt: 'Enter the folder name',
            placeHolder: 'Enter the folder name',
        });

        if (!LocalCustomFolderName) throw new Error('Folder name was not provided.');

        const LocalEndPointNeeded = await vscode.window.showInputBox({
            prompt: 'Enter the endpoint',
            placeHolder: '/api/your-endpoint'
        });

        if (!LocalEndPointNeeded) throw new Error('Endpoint was not provided.');

        const LocalFromPath = path.join(__dirname, "..", "copyCode");
        const LocalToPath = path.join(selectedFolder, LocalCustomFolderName);

        await fse.copy(LocalFromPath, LocalToPath);

        const fetchFuncsPath = path.join(LocalToPath, "FormLoad", "AddListeners", "RefreshBSTableClass", "FetchAsGet", 'getUrl.json');

        if (!await fse.pathExists(fetchFuncsPath)) {
            throw new Error('getUrl.json not found in the copied folder.');
        }

        LocalFuncUpdateGetUrlJson({
            fetchFuncsPath,
            inEndPointNeeded: LocalEndPointNeeded
        });

        vscode.window.showInformationMessage(` Folder '${LocalCustomFolderName}' created and endpoint added: ${LocalEndPointNeeded}`);
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    }
};

const LocalFuncUpdateGetUrlJson = ({ fetchFuncsPath, inEndPointNeeded }) => {
    const fetchFuncsContent = fse.readFileSync(fetchFuncsPath, 'utf8');
    let LocalFileDataAsJson = JSON.parse(fetchFuncsContent);
    LocalFileDataAsJson.GetEndPoint = inEndPointNeeded;
    fse.writeFileSync(fetchFuncsPath, JSON.stringify(LocalFileDataAsJson, null, 2));
};

module.exports = { StartFunc };
