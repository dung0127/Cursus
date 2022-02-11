const initState = {
    courses: [],
    page: 0,
    totalPages: 0,
    addSuccess: false,
    deteleSuccess: false
};

export const courseReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_ALL_COURSE':
            {
                return {
                    ...state,
                    courses: action.courses,
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