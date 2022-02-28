const initState = {
    courses: [],
    page: 0,
    totalPages: 0,
    addSuccess: false,
    deteleSuccess: false,
    courseById:[],
    coursesByDraf:[],
    coursesByActivate:[],
    messageSuccess:'',
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
                    courseById: action.courseById
                }
            } 

        case 'DELETE_COURSE':
            {
                return {
                    ...state,
                    messageSuccess:action.messageSuccess
                }
            }
            
        case 'GET_COURSE_BY_DRAF':
            {
                return {
                    ...state,
                    coursesByDraf: action.coursesByDraf
                }
            } 

        case 'GET_COURSE_BY_ACTIVATE':
            {
                return {
                    ...state,
                    coursesByActivate: action.coursesByActivate
                }
            } 

        case 'UPDATE_COURSE':
            {
                return {
                    ...state,
                    messageSuccess: action.messageSuccess
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