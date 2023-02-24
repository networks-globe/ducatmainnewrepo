import { takeEvery, put } from "redux-saga/effects"
import {  GET_TESTIMONIALS,GET_TESTIMONIALS_RED } from "../constants/constants"

import { getTestimonialAPI } from "../services/TestimonialService"

function* getTestimonialSaga() {
    var response = yield getTestimonialAPI()
    yield put({ type: GET_TESTIMONIALS_RED, result: response.result, data: response.data })
}

export default function* testimonialSaga() {    //watcher
    yield takeEvery(GET_TESTIMONIALS, getTestimonialSaga)
}



