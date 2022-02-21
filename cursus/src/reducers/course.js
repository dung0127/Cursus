const initState = {
    courses: [],
    page: 0,
    totalPages: 0,
    addSuccess: false,
    deteleSuccess: false,
    courseBy:[],
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

        case 'SEARCH_COURSE':
            {
                return {
                    ...state,
                    courses: action.courses,
                    page: action.page,
                    totalPages: action.totalPages
                }
            }

        case 'COURSE_BY_ID':
            {
                return {
                    ...state,
                    courseBy: action.courseBy
                }
            } 

        case 'DELETE_COURSE':
            {
                return {
                    ...state,
                    deleteSuccess: true
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