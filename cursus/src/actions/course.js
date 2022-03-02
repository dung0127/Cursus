import { COURSE_API_BASE_URL,COURSE_INFO_API_BASE_URL } from "../config/env";
import authHeader from "../config/authHeader";
import axios from "axios";
import $ from "jquery"

export const fetchCourseRequest = (page) => {
    return(dispatch) => {
        axios.get(COURSE_API_BASE_URL +'/?pageNumber='+ page + '&size=12',{ headers: authHeader() }).then((res) => {
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

export const fetchCourseByDrafRequest = () => {
    return(dispatch) => {
        axios.get(COURSE_API_BASE_URL,{ headers: authHeader() }).then((res) => {
            //dispatch(getAllCourse(res.data.data.content,res.data.data.pageable.pageNumber,res.data.data.totalPages))
            axios.get(COURSE_API_BASE_URL + '?size='+ res.data.data.totalElements,{ headers: authHeader() }).then((re) => {
                let filter = re.data.data.content.filter(d => d.activate === false)
                dispatch(getCourseByDraf(filter))
                let filterr = re.data.data.content.filter(d => d.activate === true)
                dispatch(getCourseByActivate(filterr))
            })
            
        })
    }
}

export const getCourseByDraf = (coursesByDraf) => {
    return {
        type:'GET_COURSE_BY_DRAF',
        coursesByDraf
    }
}


export const getCourseByActivate = (coursesByActivate) => {
    return {
        type:'GET_COURSE_BY_ACTIVATE',
        coursesByActivate
    }
}

export const searchCourseRequest = (search) => {
    return(dispatch) => {
        axios.get(COURSE_INFO_API_BASE_URL+'/search?title='+search, { headers: authHeader() }).then((res) => {
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

export const courseById = (courseById) => {
    return {
        type:'COURSE_BY_ID',
        courseById,
         
    }
} 

export const deleteCourseRequest = (id) => {
    return(dispatch) => {
        axios.delete('http://localhost:8080/api/course/delete/' + id, { headers: authHeader() }).then((res) => {
            dispatch(deleteCourse(res.data.message))
            $('#success').fadeIn('fast').delay(3000).fadeOut('slow');
            dispatch(fetchCourseRequest(0))
        })
    }
}

export const deleteCourse = (messageSuccess) => {
    return {
        type:'DELETE_COURSE',
        messageSuccess
    }
}

export const updateCourseRequest = (edit, courseId) => {
    return(dispatch) => {
        axios.post('http://localhost:8080/api/course/update/', edit, { headers: authHeader() }).then((res) => {
            dispatch(updateCourse(res.data.message))
            $('#success').fadeIn('fast').delay(3000).fadeOut('slow');
            
        })
    }
}

export const updateCourse = (messageSuccess) => {
    return {
        type:'UPDATE_COURSE',
        messageSuccess
    }
}