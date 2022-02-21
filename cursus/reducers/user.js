var initState = {
    users: [],
    page: 0,
    totalPages: 0,
    addSuccess: false,
    deteleSuccess: false
};

export var userReducer = function userReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case 'GET_ALL_USER':
            {
                return Object.assign({}, state, {
                    users: action.users,
                    page: action.page,
                    totalPages: action.totalPages
                });
            }

        case 'ADD_USER':
            {
                return Object.assign({}, state, {
                    addSuccess: true
                });
            }

        case 'DELETE_USER':
            {
                return Object.assign({}, state, {
                    deleteSuccess: true
                });
            }

        case 'SEARCH_USER':
            {
                return Object.assign({}, state, {
                    users: action.users,
                    page: action.page,
                    totalPages: action.totalPages
                });
            }

        default:
            {
                return Object.assign({}, state);
            }
    }
};