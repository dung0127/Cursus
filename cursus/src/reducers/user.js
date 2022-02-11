const initState = {
    users: [],
    page: 0,
    totalPages: 0,
    addSuccess: false,
    deteleSuccess: false
};
 
export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_ALL_USER':
            {
                return {
                    ...state,
                    users: action.users,
                    page: action.page,
                    totalPages: action.totalPages
                }
            }
            
        case 'ADD_USER':
            {
                return {
                    ...state,
                    addSuccess: true
                }
            }   

        case 'DELETE_USER':
            {
                return {
                    ...state,
                    deleteSuccess: true
                }
            }

        case 'SEARCH_USER':
            {
                return {
                    ...state,
                    users: action.users,
                    page: action.page,
                    totalPages: action.totalPages
                }
            }

        default:
            {
                return {
                    ...state
                }
            }
    }
}