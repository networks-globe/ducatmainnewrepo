import { takeEvery, put } from "redux-saga/effects"
import {  GET_CENTER,GET_CENTER_RED } from "../constants/constants"

import { getCenterAPI } from "../services/CenterService"

function* getCenterSaga() {
    var response = yield getCenterAPI()
    yield put({ type: GET_CENTER_RED, result: response.result, data: response.data })
}

export default function* centerSaga() {    //watcher
    yield takeEvery(GET_CENTER, getCenterSaga)
}



