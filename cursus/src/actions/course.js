import { COURSE_API_BASE_URL } from "../config/env";
import authHeader from "../config/authHeader";
import axios from "axios";

export const fetchCourseRequest = (page) => {
    return(dispatch) => {
        axios.get(COURSE_API_BASE_URL +'/?pageNumber='+ page, { headers: authHeader() }).then((res) => {
            dispatch(getAllCourse(res.data.data.content,res.data.data.pageable.pageNumber,res.data.data.totalPages))
        })
    }
}

export const getAllCourse = (courses, page, totalPages) => {
    return {
        type:'GET_ALL_COURSE',
        courses,
        page,
        totalPages
    }
}