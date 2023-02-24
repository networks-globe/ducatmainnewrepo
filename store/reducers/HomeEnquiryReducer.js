import { ADD_HOME_ENQUIRY_RED } from "../constants/constants";

export default function HomeEnquiryReducer(state = [], action) {
    switch (action.type) {
        case ADD_HOME_ENQUIRY_RED:
            case ADD_HOME_ENQUIRY_RED:
            if(action.result==="Fail"){
                alert(action.msg)
                return state
            }
            else
            return [...state,action.data]
        default:
            return state
    }
} 