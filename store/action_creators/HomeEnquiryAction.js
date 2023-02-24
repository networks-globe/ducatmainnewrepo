import { ADD_HOME_ENQUIRY } from "../constants/constants"


export function addHomeEnquiry(data){
    return{
        type:ADD_HOME_ENQUIRY,
        payload:data
    }
}