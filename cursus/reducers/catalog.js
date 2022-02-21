
var initState = {
    catalogs: [],
    createSuccess: false,
    updateSuccess: false
};

export var catalogReducer = function catalogReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case 'GET_ALL_CATALOG':
            {
                return Object.assign({}, state, {
                    catalogs: action.catalogs
                });
            }

        case 'SEARCH_CATALOG':
            {
                return Object.assign({}, state, {
                    catalogs: action.catalogs
                });
            }

        case 'CREATE_CATALOG':
            {
                return Object.assign({}, state, {
                    createSuccess: true
                });
            }

        case 'UPDATE_CATALOG':
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