const StartFunc = () => {
    let jVarLocalItemName = jFLocalTableFooterItemNameInputId();
    let jVarLocalItemCategory = jVarLocalTableFooterItemCategoryInputId(); // Mobile Number
    let jVarLocalItemGroup = jFLocalTableFooterItemGroupInputId(); // City
    let jvarlocalfield = jFLocalToInputTableFooterFarmerFieldInputId();

    let jVarLocalIsValid = true;

    // Validate Farmer Name
    if (jVarLocalItemName === "") {
        document.getElementById("TableFooterItemNameInputId").classList.add("is-invalid");
        jVarLocalIsValid = false;
    } else {
        document.getElementById("TableFooterItemNameInputId").classList.remove("is-invalid");
    }

    // Validate Farmer Mobile (10-digit number)
    if (jVarLocalItemCategory === "" || !/^\d{10}$/.test(jVarLocalItemCategory)) {
        document.getElementById("TableFooterItemCategoryInputId").classList.add("is-invalid");
        jVarLocalIsValid = false;
    } else {
        document.getElementById("TableFooterItemCategoryInputId").classList.remove("is-invalid");
    }

    // Validate Farmer City
    if (jVarLocalItemGroup === "") {
        document.getElementById("TableFooterItemGroupInputId").classList.add("is-invalid");
        jVarLocalIsValid = false;
    } else {
        document.getElementById("TableFooterItemGroupInputId").classList.remove("is-invalid");
    }

    // Validate Farmer Field
    if (jvarlocalfield === "") {
        document.getElementById("TableFooterFarmerFieldInputId").classList.add("is-invalid");
        jVarLocalIsValid = false;
    } else {
        document.getElementById("TableFooterFarmerFieldInputId").classList.remove("is-invalid");
    }

    if (jVarLocalIsValid === false) {
        return;
    };

    let LocalObj = {};
    LocalObj.FARMERNAME = jVarLocalItemName;
    LocalObj.FARMERMOBILE = jVarLocalItemCategory;
    LocalObj.FARMERCITY = jVarLocalItemGroup;
    LocalObj.FARMERFIELD = jvarlocalfield;

    return LocalObj;
};

let jFLocalTableFooterItemNameInputId = () => {
    let jVarLocalTableFooterRateInputId = 'TableFooterItemNameInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterRateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jVarLocalTableFooterItemCategoryInputId = () => {
    let jVarLocalTableFooterItemCategoryInputId = 'TableFooterItemCategoryInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemCategoryInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTableFooterItemGroupInputId = () => {
    let jVarLocalTableFooterItemGroupInputId = 'TableFooterItemGroupInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemGroupInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalToInputTableFooterFarmerFieldInputId = () => {
    let jVarLocalHtmlId = 'TableFooterFarmerFieldInputId';
    let jVarLocalTableFooterFarmerFieldInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterFarmerFieldInputId === null === false) {
        return jVarLocalTableFooterFarmerFieldInputId.value.trim();
    };
};

export { StartFunc };