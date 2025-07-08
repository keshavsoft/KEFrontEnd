let StartFunc = ({ inColumns }) => {
    let LocalColumns = JSON.parse(JSON.stringify(inColumns));

    LocalColumns.splice(0, 0, jFLocalFuncForSerialColumn());
    LocalColumns.push(jFLocalFuncForOptionsColumn());

    LocalColumns.forEach(element => {
        if (element.field !== "Alter" && element.field !== "KS-Serial") {
            element.footerFormatter = (data) => {
                return jFLocalFooterFormatterFunc({
                    inData: data,
                    inColumnInfo: element
                });
            };
        }
    });

    return LocalColumns;
};

const jFLocalOptsFormaterRun = (value, row, index) => {
    return `<i class="bi bi-pencil-square text-danger" data-index="${index}" title="Edit Row" style="cursor:pointer;"></i>`;
};

const jFLocalFuncForOptionsColumn = () => {
    return {
        field: "Alter",
        title: "Alter",
        align: "center",
        formatter: jFLocalOptsFormaterRun
    };
};

const jVarLocalFormatterFunc = (value, row, index) => {
    return index + 1;
};

const jFLocalFuncForSerialColumn = () => {
    return {
        field: "KS-Serial",
        title: "#",
        width:"50px",
        formatter: jVarLocalFormatterFunc
    };
};

const jFLocalFooterFormatterFunc = ({ inData, inColumnInfo }) => {
    console.log("data : ", inData, inColumnInfo);

    return `<input class="form-control" name="${inColumnInfo.field}" type="text">`;
};

export { StartFunc };
