import { GET_COURSE_DROPDOWN_LIST_RED } from "../constants/constants";

export default function CourseDropDownListReducer(state = [], action) {
    switch (action.type) {
        case GET_COURSE_DROPDOWN_LIST_RED:
            return action.data
        default:
            return state
    }
} 