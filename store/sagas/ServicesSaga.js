import { takeEvery, put } from "redux-saga/effects"
import {  GET_SERVICE,GET_SERVICE_RED } from "../constants/constants"

import { getServiceAPI } from "../services/ServiceesService"

function* getServiceSaga() {
    var response = yield getServiceAPI()
    yield put({ type: GET_SERVICE_RED, result: response.result, data: response.data })
}

export default function* servicesSaga() {    //watcher
    yield takeEvery(GET_SERVICE, getServiceSaga)
}



