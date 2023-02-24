import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import { getCourse } from '../../store/action_creators/CourseAction'
import { getCourseCategory } from '../../store/action_creators/CourseCategoryAction'
import { getCenter } from '../../store/action_creators/CenterAction'
import { addHomeEnquiry } from "../../store/action_creators/HomeEnquiryAction"


export default function Course() {
    const router = useRouter()
    let [course, setCourse] = useState([])
    let [courseCategory, setCourseCategory] = useState({})
    let [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        center: "",
        course: ""
    })
    var dispatch = useDispatch()
    let allCourses = useSelector((state) => state.CourseStateData)
    let allCenters = useSelector((state) => state.CenterStateData)
    let allCourseCategories = useSelector((state) => state.CourseCategoryStateData)
    async function getAPIData() {
        dispatch(getCourse())
        dispatch(getCourseCategory())
        dispatch(getCenter())
        var data = allCourseCategories.find((item) => {
            return item.name !== undefined && item.name === router.query.slug
        })
        if (data) {
            setCourseCategory(data)
        }
        data = allCourses.filter((item) => {
            return item.courseCategory !== undefined && item.courseCategory === router.query.slug
        })
        if (data) {
            setCourse(data)
        }
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
    }, [router.query.slug, allCourses.length, allCourseCategories.length])

    return (
        <>
            <Head>
                <title>Best IT Training School - Campus, Corporate Training in Delhi NCR</title>
                <meta name="description" content="testing" />
            </Head>
            <main>
                <section>
                    <div className="bannerimg cover-image home-banner" data-bs-image-src="/images/banners/banner2.jpg">
                        <div className="header-text mb-0">
                            <div className="container">
                                <div className="text-center text-white ">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link href="/course">Course Category</Link>
                                        </li>
                                        <li className="breadcrumb-item active text-white" aria-current="page">{courseCategory.name}</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-12">
                                <div className="card">
                                    <div className="card-body d-flex justify-content-between">
                                        <div className="item7-card-img">
                                            {
                                                courseCategory.logo ?
                                                    <img src={process.env.NEXT_PUBLIC_SERVER + `/courseCategory/${courseCategory.logo}`} alt="img" height="70px" className="w-100" /> :
                                                    ""
                                            }
                                        </div>
                                        <a href="#" className="text-dark">
                                            <h2 className="font-weight-semibold">{courseCategory.name}</h2>
                                        </a>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title home-banner text-light w-100 text-center p-2">Courses</h3>
                                    </div>
                                    <div className="card-body p-0">
                                        {/* <div className="list-catergory">
                                            <div className="item-list">
                                                <ul className="list-group mb-0">
                                                    {
                                                        course.map((item, index) => {
                                                            return <li key={index} className="list-group-item">
                                                                <Link href={'/' + item.seourl} className="text-dark">
                                                                    {item.title}
                                                                </Link>
                                                            </li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div> */}
                                        <div className="row">
                                            {
                                                course.map((item, index) => {
                                                    return <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
                                                        <div className="card">
                                                            <li  className="list-group-item" style={{heigh:"100px"}}>
                                                                <Link href={'/' + item.seourl} className="text-dark">
                                                                    {item.title}
                                                                </Link>
                                                            </li>
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-12">
                                <h5 className='text-center home-banner text-light p-2'>Enquiry Now</h5>
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
                                    <div className="mt-2">
                                        <button className='btn home-banner text-light w-100' type='submit'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="sptb bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-xl-6 col-md-12">
                                <div className="sub-newsletter">
                                    <h3 className="mb-2">
                                        <i className="fa fa-paper-plane-o me-2"></i>
                                        Subscribe To Our Newsletter</h3>
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-6 col-md-12">
                                <div className="input-group sub-input mt-1">
                                    <input type="text" className="form-control input-lg " placeholder="Enter your Email" />
                                    <div className="input-group-text border-0 bg-transparent p-0 ">
                                        <button type="button" className="btn btn-primary btn-lg br-te-7 br-be-7">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>
        </>
    )
}
