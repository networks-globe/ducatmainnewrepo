import { all } from "redux-saga/effects"

import courseSaga from "./CourseSaga"
import courseCategorySaga from "./CourseCategorySaga"
import centerSaga from "./CenterSaga"
import homeEnquirySaga from "./HomeEnquirySaga"
import upcomingBatchesSaga from "./UpcomingBatchesSaga"
import serviceSaga from "./ServicesSaga"
import cmsSaga from "./CMSSaga"
import driveSaga from "./DriveSaga"
import testimonialSaga from "./TestimonialSaga"
import placedStudentsSaga from "./PlacedStudentsSaga"
import courseDropDownListSaga from "./CourseDropDownListSaga"

export default function* RootSaga() {
    yield all([
        courseSaga(),
        courseCategorySaga(),
        centerSaga(),
        homeEnquirySaga(),
        upcomingBatchesSaga(),
        serviceSaga(),
        cmsSaga(),
        driveSaga(),
        testimonialSaga(),
        placedStudentsSaga(),
        // courseCategorySaga()
    ])
}