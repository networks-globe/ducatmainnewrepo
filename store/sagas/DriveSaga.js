import { takeEvery, put } from "redux-saga/effects"
import {  GET_DRIVE,GET_DRIVE_RED } from "../constants/constants"

import { getDriveAPI } from "../services/DriveService"

function* getDriveSaga() {
    var response = yield getDriveAPI()
    yield put({ type: GET_DRIVE_RED, result: response.result, data: response.data })
}

export default function* driveSaga() {    //watcher
    yield takeEvery(GET_DRIVE, getDriveSaga)
}



