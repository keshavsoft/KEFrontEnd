let StartFunc = ({ inColumns }) => {
    let LocalColumns = JSON.parse(JSON.stringify(inColumns));

    LocalColumns.splice(0, 0, jFLocalFuncForSerialColumn());

    LocalColumns.forEach(element => {
        if (element.field !== "KS-Serial") {
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

const jFLocalFuncForSerialColumn = () => {
    return {
        field: "KS-Serial",
        title: "#",
        width: "50px",
        formatter: jVarLocalFormatterFunc
    };
};

const jVarLocalFormatterFunc = (value, row, index) => {
    return index + 1;
};

const jFLocalFooterFormatterFunc = ({ inData, inColumnInfo }) => {
    console.log("data : ", inData, inColumnInfo);

    return `<input class="form-control" name="${inColumnInfo.field}" type="text">`;
};

export { StartFunc };
