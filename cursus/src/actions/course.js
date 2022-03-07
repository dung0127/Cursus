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

export const fetchCourseByDrafRequest = (page) => {
    return(dispatch) => {
        axios.get('http://localhost:8080/api/course/filter?filter=Draft'+'&pageNumber='+page,{ headers: authHeader() }).then((res) => {

                dispatch(getCourseByDraf(res.data.data.content,res.data.data.pageable.pageNumber,res.data.data.totalPages))
            
        })
    }
}

export const fetchCourseByActivateRequest = (page) => {
    return(dispatch) => {
        axios.get('http://localhost:8080/api/course/filter?filter=Activate'+'&pageNumber='+page,{ headers: authHeader() }).then((res) => {

                dispatch(getCourseByActivate(res.data.data.content,res.data.data.pageable.pageNumber,res.data.data.totalPages))
            
        })
    }
}

export const getCourseByDraf = (coursesByDraf,  page, totalPages) => {
    return {
        type:'GET_COURSE_BY_DRAF',
        coursesByDraf,
        page,
        totalPages
    }
}


export const getCourseByActivate = (coursesByActivate,  page, totalPages) => {
    return {
        type:'GET_COURSE_BY_ACTIVATE',
        coursesByActivate,
        page,
        totalPages
    }
}

export const searchCourseRequest = (search) => {
    return(dispatch) => {
        axios.get(COURSE_INFO_API_BASE_URL+'/search?title='+search, { headers: authHeader() }).then((res) => {
            dispatch(searchCourse(res.data.data.content,res.data.data.pageable.pageNumber,res.data.data.totalPages))
            
        })
    }
}

export const searchCourse = (coursesSearch, page, totalPages) => {
    return {
        type:'SEARCH_COURSE',
        coursesSearch,
        page,
        totalPages
    }
}

export const searchCourseAdRequest = (search) => {
    return(dispatch) => {
        axios.get(COURSE_INFO_API_BASE_URL+'/search?title='+search, { headers: authHeader() }).then((res) => {
            dispatch(searchCourseAd(res.data.data.content,res.data.data.pageable.pageNumber,res.data.data.totalPages))
            
        })
    }
}

export const searchCourseAd = (courses, page, totalPages) => {
    return {
        type:'SEARCH_COURSE_AD',
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

export const fetchAllEnrollRequest = () => {
    return(dispatch) => {
        axios.get('http://localhost:8080/api/course/enroll',{ headers: authHeader() }).then((res) => {
            dispatch(getAllEnroll(res.data.data))
        })
    }
}

export const getAllEnroll = (coursesEnroll) => {
    return {
        type:'GET_ALL_ENROLL',
        coursesEnroll
    }
}

export const imageRequest = (img) => {
    return(dispatch) => {
        const formData = new FormData();

		formData.append('image', img);

		fetch(
			'http://localhost:8080/api/upload',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => {
				dispatch(image(response));
			})
			.catch((error) => {
				console.error('Error:', error);
			});
    }
}


export const image = (img) => {
    return {
        type:'IMAGE',
        img,
         
    }
} 