import { GET_TESTIMONIALS_RED } from "../constants/constants";

export default function TestimonialReducer(state = [], action) {
    switch (action.type) {
        case GET_TESTIMONIALS_RED:
            return action.data
        default:
            return state
    }
} 