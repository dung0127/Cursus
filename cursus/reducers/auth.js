var initState = {
    token: null,
    username: null,
    role: null,
    loginSuccess: false
};

export var authReducer = function authReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
    var action = arguments[1];

    switch (action.type) {
        case 'LOGIN':
            {
                return Object.assign({}, state, {
                    token: action.token,
                    username: action.username,
                    role: action.role,
                    loginSuccess: true
                });
            }
        case 'LOGOUT':
            {
                return Object.assign({}, state, {
                    token: null,
                    username: null,
                    role: null
                });
            }
        default:
            {
                return Object.assign({}, state);
            }
    }
};