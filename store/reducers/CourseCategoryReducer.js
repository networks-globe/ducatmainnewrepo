import { GET_COURSE_CATEGORY_RED } from "../constants/constants";

export default function CourseCategoryReducer(state = [], action) {
    switch (action.type) {
        case GET_COURSE_CATEGORY_RED:
            return action.data
        default:
            return state
    }
} 