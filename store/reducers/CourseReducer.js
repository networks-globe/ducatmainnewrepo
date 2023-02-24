import { GET_COURSE_RED } from "../constants/constants";

export default function CourseReducer(state = [], action) {
    switch (action.type) {
        case GET_COURSE_RED:
            return action.data
        default:
            return state
    }
} 