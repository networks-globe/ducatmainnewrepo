import { takeEvery, put } from "redux-saga/effects"
import {  ADD_HOME_ENQUIRY,ADD_HOME_ENQUIRY_RED } from "../constants/constants"

import { addHomeEnquiryAPI } from "../services/HomeEnquiryService"

function* addHomeEnquirySaga(data) { //executer
    var response = yield addHomeEnquiryAPI(data)
    yield put({ type: ADD_HOME_ENQUIRY_RED, result: response.message, data: response.data })
}

export default function* homeEnquirySaga() {    //watcher
    yield takeEvery(ADD_HOME_ENQUIRY, addHomeEnquirySaga)
}
