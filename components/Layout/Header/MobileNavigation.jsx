import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import jQuery from 'jquery';
import { useRouter } from 'next/router'
import { addHomeEnquiry } from "../../../store/action_creators/HomeEnquiryAction"

import { getCourse } from '../../../store/action_creators/CourseAction';
import { getService } from '../../../store/action_creators/ServiceAction';
import { getCourseCategory } from "../../../store/action_creators/CourseCategoryAction"
import { getCenter } from '../../../store/action_creators/CenterAction'

import { useDispatch, useSelector } from 'react-redux';
export default function MobileNavigation() {
    let [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: "",
        course: "",
        branch: "",
        message: ""
    });
    const router = useRouter()
    const [courseCategory, setCourseCategory] = useState([])
    const [courses, setCourses] = useState([])
    var dispatch = useDispatch()

    var allCourses = useSelector((state) => state.CourseStateData)
    var allCourseCategories = useSelector((state) => state.CourseCategoryStateData)
    let allCenters = useSelector((state) => state.CenterStateData)
    // let allService = useSelector((state) => state.ServiceStateData)


    async function getAPIData() {
        dispatch(getCourse())
        dispatch(getCourseCategory())
        dispatch(getCenter())
        // dispatch(getService())
        if (allCourseCategories)
            setCourseCategory(allCourseCategories)
        if (allCourses)
            setCourses(allCourses)
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
    function mobileNav() {

        jQuery('#horizontalMenucontainer').toggleClass('width-resize');
        jQuery('<div class="overlapblackbg"></div>').prependTo('.horizontalMenu');
        jQuery('body').toggleClass('active');
        jQuery('.overlapblackbg').on("click", function (e) {
            jQuery("body").removeClass('active');
        });

        jQuery(window).trigger('resize');

        jQuery('.horizontalMenu > .horizontalMenu-list > li').has('.sub-menu').prepend('<span class="horizontalMenu-click"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span>');
        jQuery('.horizontalMenu > .horizontalMenu-list > li').has('.horizontal-megamenu').prepend('<span class="horizontalMenu-click"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span>');
        jQuery('.horizontalMenu-click').on("click", function (e) {
            jQuery(this).toggleClass('ws-activearrow').parent().siblings().children().removeClass('ws-activearrow');
            jQuery(".horizontalMenu > .horizontalMenu-list > li > .sub-menu, .horizontal-megamenu").not(jQuery(this).siblings('.horizontalMenu > .horizontalMenu-list > li > .sub-menu, .horizontal-megamenu')).slideUp('slow');
            jQuery(this).siblings('.sub-menu').slideToggle('slow');
            jQuery(this).siblings('.horizontal-megamenu').slideToggle('slow');
            console.log("fasdfasf");
        });

        jQuery('.horizontalMenu > .horizontalMenu-list > li > ul > li').has('.sub-menu').prepend('<span class="horizontalMenu-click02"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span>');
        jQuery('.horizontalMenu > .horizontalMenu-list > li > ul > li > ul > li').has('.sub-menu').prepend('<span class="horizontalMenu-click02"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span>');
        jQuery('.horizontalMenu-click02').on("click", function (e) {
            jQuery(this).children('.horizontalMenu-arrow').toggleClass('horizontalMenu-rotate');
            jQuery(this).siblings('li > .sub-menu').slideToggle('slow');
        });
    }
    function chatBot() {
        var chatbot_id = 5486;
        !function () {
            var t, e, a = document, s = "smatbot-chatbot"; a.getElementById(s) || (t = a.createElement("script"), t.id = s, t.type = "text/javascript", t.src = "https://smatbot.s3.amazonaws.com/files/smatbot_plugin.js.gz", e = a.getElementsByTagName("script")[0], e.parentNode.insertBefore(t, e))
        }()
    }
    useEffect(() => {
                getAPIData()
            }, [allCourses.length, allCourseCategories.length, allCenters.length])
            return (
            <>


                <div className='d-none d-lg-block w-100' style={{ position: "fixed", bottom: "0px", zIndex: "1000" }}>
                    <form onSubmit={postData} className='d-flex home-banner p-1'>
                        <input type="text" name="name" required onChange={getData} id="name" placeholder='Enter Name' className='form-control m-2' />
                        <input type="text" name="email" required onChange={getData} id="email" placeholder='Enter Email' className='form-control m-2' />
                        <input type="text" name="phone" required onChange={getData} id="phone" placeholder='Enter Contact Number' className='form-control m-2' />
                        <select name='course' onChange={getData} id='course' className='form-control m-2'>
                            <option value="">Select a Course</option>
                            {
                                allCourseCategories.map((item, index) => {
                                    return <option key={index} value={item.name}>{item.name}</option>
                                })
                            }
                        </select>
                        <select name='center' onChange={getData} id='center' className='form-control m-2'>
                            <option value="">Select Branch</option>
                            {
                                allCenters.map((item, index) => {
                                    return <option key={index} value={item.title}>{item.title}</option>
                                })
                            }
                        </select>
                        <button className="btn pdf-background" style={{ width: "400px" }} type="submit">Callback</button>
                    </form>
                </div>
                {/* <!-- Mobile Header --> */}
                <div className="sticky sticky-pin">
                    <div className="horizontal-header clearfix ">
                        <div className="container">
                            <a id="horizontal-navtoggle" className="animated-arrow" onClick={mobileNav}><span></span></a>
                            <span className="smllogo">
                                <img className="mobile-light-logo" src="/images/ducat_logo.png" width="120" alt="" />
                                <img className="mobile-dark-logo" src="/images/ducat_logo.png" width="120" alt="" />
                            </span>
                            <a href="tel:7070905090" className="callusbtn"><i className="fa fa-phone" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                {/* <!-- Mobile Header --> */}

                <div>
                    <div className="horizontal-main clearfix">
                        <div className="horizontal-mainwrapper container clearfix">
                            <div className="desktoplogo">
                                <Link href="/" className="light-logo"><img src="/images/ducat_logo.png" alt="" /></Link>
                                <Link href="/" className="dark-logo"><img src="/images/ducat_logo.png" alt="" /></Link>
                            </div>

                            {/* <!--Nav--> */}
                            <nav className="horizontalMenu clearfix d-md-flex sticky-top">
                                <ul className="horizontalMenu-list a-auto">
                                    <li aria-haspopup="true">
                                        <Link href="/" style={{ fontSize: "17px" }}>Home</Link>
                                    </li>

                                    <li aria-haspopup="true"><a href="#" className='home-banner text-light' style={{ fontSize: "17px" }}>Course <span className="fa fa-caret-down m-0 text-light"></span></a>
                                        <ul className="sub-menu">
                                            {
                                                courseCategory.length > 0 && courseCategory.map((value, index) => (
                                                    <li aria-haspopup="true" key={index}><Link href={`/course-category/${value.name}`}>{value.name} <i className="fa fa-angle-right float-end mt-1 d-none d-lg-block"></i></Link>
                                                        <ul className="sub-menu">
                                                            {
                                                                courses.length > 0 && courses.map((course, index) => (

                                                                    course.courseCategory === value.name ?
                                                                        (
                                                                            <li aria-haspopup="true" key={index}>
                                                                                <Link href={'/' + course.seourl}>{course.title}
                                                                                </Link>
                                                                            </li>
                                                                        ) : ('')
                                                                ))
                                                            }
                                                        </ul>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>

                                    {/* <li aria-haspopup="true"><Link href="#">Certificate</Link></li> */}

                                    {/* <li aria-haspopup="true"><a href="#">Services<span className="fa fa-caret-down m-0"></span></a>
                                    <ul className="sub-menu">
                                        {
                                            allService.map((item,index)=>{
                                                return <li key={index} aria-haspopup="true"><Link href="#">{item.name}</Link></li>
                                            })
                                        }
                                    </ul>
                                </li> */}
                                    {/* <li aria-haspopup="true"><Link href="#">Online Registration</Link></li> */}
                                    {/* <li aria-haspopup="true"><Link href="#">Tutorials</Link></li> */}
                                    <li aria-haspopup="true"><Link href="/placement" style={{ fontSize: "17px" }}>Placement</Link></li>
                                    <li aria-haspopup="true"><Link href="/about" style={{ fontSize: "17px" }}>About</Link></li>
                                    <li aria-haspopup="true"><Link href="/contact" style={{ fontSize: "17px" }}> Contact Us <span className="wsarrow"></span></Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
            )
}
