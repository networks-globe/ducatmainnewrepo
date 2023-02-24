import { takeEvery, put } from "redux-saga/effects"
import {  GET_COURSE,GET_COURSE_RED } from "../constants/constants"

import { getCourseAPI } from "../services/CourseService"

function* getCourseSaga() {
    var response = yield getCourseAPI()
    yield put({ type: GET_COURSE_RED, result: response.result, data: response.data })
}

export default function* courseSaga() {    //watcher
    yield takeEvery(GET_COURSE, getCourseSaga)
}



