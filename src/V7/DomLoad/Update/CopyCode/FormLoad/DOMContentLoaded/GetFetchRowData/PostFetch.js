import ConfigJson from "../../../config.json" with { type: "json" };

let StartFunc = async () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "pk" });

    let jVarLocalRowData = ConfigJson.RowDataEndPoint;
    
    let jVarLocalFetchUrl = `${jVarLocalRowData}/${jVarLocalFilterString}`;
    
    let response = await fetch(jVarLocalFetchUrl);
    
    let data = await response.json();

    return await data;
};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);


    return value;
};

export { StartFunc };