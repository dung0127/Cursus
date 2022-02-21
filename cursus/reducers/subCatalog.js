
var initState = {
    subCatalogs: [],
    createSuccess: false,
    updateSuccess: false
};

export var subCatalogReducer = function subCatalogReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case 'GET_ALL_SUBCATALOG':
            {
                return Object.assign({}, state, {
                    subCatalogs: action.subCatalogs
                });
            }

        case 'SEARCH_SUBCATALOG':
            {
                return Object.assign({}, state, {
                    subCatalogs: action.subCatalogs
                });
            }

        case 'CREATE_SUBCATALOG':
            {
                return Object.assign({}, state, {
                    createSuccess: true
                });
            }

        case 'UPDATE_SUBCATALOG':
            {
                return Object.assign({}, state, {
                    updateSuccess: true
                });
            }

        default:
            {
                return Object.assign({}, state);
            }
    }
};