import { takeEvery, put } from "redux-saga/effects"
import {  GET_COURSE_CATEGORY,GET_COURSE_CATEGORY_RED } from "../constants/constants"

import { getCourseCategoryAPI } from "../services/CourseCategoryService"

function* getCourseCategorySaga() {
    var response = yield getCourseCategoryAPI()
    yield put({ type: GET_COURSE_CATEGORY_RED, result: response.result, data: response.data })
}

export default function* courseCategorySaga() {    //watcher
    yield takeEvery(GET_COURSE_CATEGORY, getCourseCategorySaga)
}



