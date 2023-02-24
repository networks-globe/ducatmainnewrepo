import { takeEvery, put } from "redux-saga/effects"
import {  GET_CMS,GET_CMS_RED } from "../constants/constants"

import { getCMSAPI } from "../services/CMSService"

function* getCMSSaga() {
    var response = yield getCMSAPI()
    yield put({ type: GET_CMS_RED, result: response.result, data: response.data })
}

export default function* cmsSaga() {    //watcher
    yield takeEvery(GET_CMS, getCMSSaga)
}



