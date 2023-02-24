import { takeEvery, put } from "redux-saga/effects"
import {  GET_COURSE_DROPDOWN_LIST,GET_COURSE_DROPDOWN_LIST_RED } from "../constants/constants"

import { getCourseDropDownListAPI } from "../services/CourseDropDownListService"

function* getCourseDropDownListSaga() {
    var response = yield getCourseDropDownListAPI()
    yield put({ type: GET_COURSE_DROPDOWN_LIST_RED, result: response.result, data: response.data })
}

export default function* courseDropDownListSaga() {    //watcher
    yield takeEvery(GET_COURSE_DROPDOWN_LIST, getCourseDropDownListSaga)
}



