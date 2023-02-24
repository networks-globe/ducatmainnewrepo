import { takeEvery, put } from "redux-saga/effects"
import {  GET_UPCOMING_BATCHES,GET_UPCOMING_BATCHES_RED } from "../constants/constants"

import { getUpcomingBatchesAPI } from "../services/UpcomingBatchesService"

function* getUpcomingBatchesSaga() {
    var response = yield getUpcomingBatchesAPI()
    yield put({ type: GET_UPCOMING_BATCHES_RED, result: response.result, data: response.data })
}

export default function* upcomingBatchesSaga() {    //watcher
    yield takeEvery(GET_UPCOMING_BATCHES, getUpcomingBatchesSaga)
}



