import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalForm = document.getElementById("FormId");
    let formData = new FormData(jVarLocalForm);

    // Append file input
    const fileInput = document.getElementById('formFile');

    if (fileInput?.files?.length > 0) {
        formData.append("image", fileInput.files[0]);
    }

    KeysJson.body = formData;

    return KeysJson;
};

export { StartFunc };
