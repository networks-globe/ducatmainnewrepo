import { combineReducers } from '@reduxjs/toolkit';
import CourseReducer from './CourseReducer';
import CourseCategoryReducer from "./CourseCategoryReducer"
import CenterReducer from "./CenterReducer"
import HomeEnquiryReducer from "./HomeEnquiryReducer"
import UpcomingBatchesReducer from "./UpcomingBatchesReducer"
import ServiceReducer from "./ServiceReducer"
import CMSReducer from "./CMSReducer"
import DriveReducer from "./DriveReducer"
import TestimonialReducer from "./TestimonialReducer"
import PlacedStudentsReducer from "./PlacedStudentsReducer"
import CourseDropDownListReducer from "./CourseDropDownListReducer"

export default combineReducers({
    CourseStateData:CourseReducer,
    CourseCategoryStateData:CourseCategoryReducer,
    CenterStateData:CenterReducer,
    HomeEnquiryStateData:HomeEnquiryReducer,
    UpcomingBatchesStateData:UpcomingBatchesReducer,
    ServiceStateData:ServiceReducer,
    CMSStateData:CMSReducer,
    DriveStateData:DriveReducer,
    TestimonialStateData:TestimonialReducer,
    PlacedStudentsStateData:PlacedStudentsReducer,
    CourseDropDownListStateData:CourseDropDownListReducer,
})
