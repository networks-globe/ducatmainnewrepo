import { GET_CMS_RED } from "../constants/constants";

export default function CMSReducer(state = [], action) {
    switch (action.type) {
        case GET_CMS_RED:
            return action.data
        default:
            return state
    }
} 