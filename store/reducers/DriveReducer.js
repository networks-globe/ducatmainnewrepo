import { GET_DRIVE_RED } from "../constants/constants";

export default function DriveReducer(state = [], action) {
    switch (action.type) {
        case GET_DRIVE_RED:
            return action.data
        default:
            return state
    }
} 