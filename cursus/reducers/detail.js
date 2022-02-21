var initState = {
    user: {},
    detailInfo: {},
    updateSuccess: false
};

export var detailReducer = function detailReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case 'GET_DETAIL_USER':
            {
                return Object.assign({}, state, {
                    user: action.user
                });
            }

        case 'GET_DETAIL_INFO':
            {
                return Object.assign({}, state, {
                    detailInfo: action.detailInfo
                });
            }

        case 'UPDATE_DETAIL':
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