import { COURSE_API_BASE_URL } from "../config/env";
import authHeader from "../config/authHeader";
import axios from "axios";

export const fetchCourseRequest = (page) => {
    return(dispatch) => {
        axios.get(COURSE_API_BASE_URL +'/?pageNumber='+ page + '&size=12').then((res) => {
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

export const searchCourseRequest = (search) => {
    return(dispatch) => {
        axios.get(COURSE_API_BASE_URL+'/search?username='+search, { headers: authHeader() }).then((res) => {
            dispatch(searchCourse(res.data.data.content,res.data.data.pageable.pageNumber,res.data.data.totalPages))
        })
    }
}

export const searchCourse = (courses, page, totalPages) => {
    return {
        type:'SEARCH_COURSE',
        courses,
        page,
        totalPages
    }
}

export const courseByIdRequest = (id) => {
    return(dispatch) => {
        axios.get('http://localhost:8080/api/course/'+id, { headers: authHeader() }).then((res) => {
            dispatch(courseById(res.data.data))
        })
    }
}

export const courseById = (courseBy) => {
    return {
        type:'COURSE_BY_ID',
        courseBy,
    }
}

export const deleteCourseRequest = (id) => {
    return(dispatch) => {
        axios.delete('http://localhost:8080/api/course/delete/' + id, { headers: authHeader() }).then((res) => {
            dispatch(deleteCourse())
            alert (res.data.message)
            dispatch(fetchCourseRequest(0))
        })
    }
}

export const deleteCourse = () => {
    return {
        type:'DELETE_COURSE'
    }
}