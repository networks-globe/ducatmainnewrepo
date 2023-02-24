import { GET_PLACED_STUDENTS_RED } from "../constants/constants";

export default function placedStudentsReducer(state = [], action) {
    switch (action.type) {
        case GET_PLACED_STUDENTS_RED:
            return action.data
        default:
            return state
    }
} 