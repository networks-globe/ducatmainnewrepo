import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { getCourseCategory } from '../../store/action_creators/CourseCategoryAction'
import { getCenter } from '../../store/action_creators/CenterAction'
import { useDispatch, useSelector } from 'react-redux';
import {addHomeEnquiry} from "../../store/action_creators/HomeEnquiryAction"

export default function Modal() {
    let [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: "",
        course: "",
        branch: "",
        message: ""
    });
    const router = useRouter()
    var dispatch = useDispatch()
    let allCenters = useSelector((state) => state.CenterStateData)
    let allCourseCategories = useSelector((state) => state.CourseCategoryStateData)
    async function getAPIData() {
        dispatch(getCourseCategory())
        dispatch(getCenter())
    }
    function getData(e) {
        var { name, value } = e.target
        setUserData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        dispatch(addHomeEnquiry({
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            course: userData.course,
            center: userData.center
        }))
        router.push("/confirmation")
    }
    useEffect(() => {
        (async () => {
            await getAPIData();
        })()
        // setInterval(()=>{
        //     var item = document.getElementById("exampleModal")
        //     if(item)
        //     item.style.display="block"
        // },1000)
    }, [allCourseCategories.length, allCenters.length])
    return (
        <>
            <button type="button" className="enquiry px-3 border-0 mybackground" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i className="fa fa-envelope fs-5"></i><span className='fs-5 enquiry-hide-show enquiry-toggle'>&nbsp;&nbsp;Enquiry Now</span></button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center w-100" id="exampleModalLabel">Enquire Now Or Call 70-70-90-50-90</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={postData}>
                                <div className="mb-1">
                                    {/* <label htmlFor="name">Name</label> */}
                                    <input type="text" name="name" required onChange={getData} id="name" placeholder='Enter Name' className='form-control' />
                                </div>
                                <div className="mb-1">
                                    {/* <label htmlFor="email">Email</label> */}
                                    <input type="text" name="email" required onChange={getData} id="email" placeholder='Enter Email' className='form-control' />
                                </div>
                                <div className="mb-1">
                                    {/* <label htmlFor="phone">Phone</label> */}
                                    <input type="text" name="phone" required onChange={getData} id="phone" placeholder='Enter Contact Number' className='form-control' />
                                </div>
                                <div className="mb-1">
                                    {/* <label htmlFor="course">Course</label> */}
                                    <select name='course' onChange={getData} id='course' className='form-control'>
                                        <option value="">Select a Course</option>
                                        {
                                            allCourseCategories.map((item, index) => {
                                                return <option key={index} value={item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="mb-1">
                                    {/* <label htmlFor="center">Center</label> */}
                                    <select name='center' onChange={getData} id='center' className='form-control'>
                                        <option value="">Select Branch</option>
                                        {
                                            allCenters.map((item, index) => {
                                                return <option key={index} value={item.title}>{item.title}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button className="btn btn-primary" data-bs-dismiss="modal" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
