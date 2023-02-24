import { GET_UPCOMING_BATCHES_RED } from "../constants/constants";

export default function UpcomingBatchesReducer(state = [], action) {
    switch (action.type) {
        case GET_UPCOMING_BATCHES_RED:
            return action.data
        default:
            return state
    }
} 