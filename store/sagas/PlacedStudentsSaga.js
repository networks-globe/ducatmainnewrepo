import { takeEvery, put } from "redux-saga/effects"
import {  GET_PLACED_STUDENTS,GET_PLACED_STUDENTS_RED } from "../constants/constants"

import { getPlacedStudentsAPI } from "../services/PlacedStudentsService"

function* getPlacedStudentsSaga() {
    var response = yield getPlacedStudentsAPI()
    yield put({ type: GET_PLACED_STUDENTS_RED, result: response.result, data: response.data })
}

export default function* placedStudentsSaga() {    //watcher
    yield takeEvery(GET_PLACED_STUDENTS, getPlacedStudentsSaga)
}



