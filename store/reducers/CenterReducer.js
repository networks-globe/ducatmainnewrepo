import { GET_CENTER_RED } from "../constants/constants";

export default function CenterReducer(state = [], action) {
    switch (action.type) {
        case GET_CENTER_RED:
            return action.data
        default:
            return state
    }
} 