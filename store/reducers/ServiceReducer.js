import { GET_SERVICE_RED } from "../constants/constants";

export default function ServiceReducer(state = [], action) {
    switch (action.type) {
        case GET_SERVICE_RED:
            return action.data
        default:
            return state
    }
} 