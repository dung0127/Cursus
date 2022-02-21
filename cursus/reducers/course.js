var initState = {
    courses: [],
    page: 0,
    totalPages: 0,
    addSuccess: false,
    deteleSuccess: false
};

export var courseReducer = function courseReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case 'GET_ALL_COURSE':
            {
                return Object.assign({}, state, {
                    courses: action.courses,
                    page: action.page,
                    totalPages: action.totalPages
                });
            }

        case 'SEARCH_COURSE':
            {
                return Object.assign({}, state, {
                    courses: action.courses,
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