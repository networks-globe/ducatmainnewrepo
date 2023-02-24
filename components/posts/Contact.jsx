import React from 'react'
import { useEffect, useState } from 'react'

import { getCourseCategory } from '../../store/action_creators/CourseCategoryAction'
import { getCenter } from '../../store/action_creators/CenterAction'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'


export default function Contact() {
    var [data, setData] = useState({
        name: "",
        email: "",
        contact: "",
        subject: "",
        message: "",
        branch: "",
        course: ""
    })
    let allCenters = useSelector((state) => state.CenterStateData)
    let allCourseCategories = useSelector((state) => state.CourseCategoryStateData)
    var dispatch = useDispatch()
    var router = useRouter()
    var [show, setShow] = useState(false)
    function getData(e) {
        setShow(false)
        var name = e.target.name
        var value = e.target.value
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        var response = await fetch(process.env.NEXT_PUBLIC_SERVER + "/api/contactus", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ ...data })
        })
        response = await response.json()
        if (response.result === "Done")
            router.push("/confirmation")
    }
    function getAPIData() {
        dispatch(getCourseCategory())
        dispatch(getCenter())
    }
    useEffect(() => {
        getAPIData()
    }, [allCenters.length, allCourseCategories.length])
    return (
        <>
            <div>
                <div className="bannerimg cover-image home-banner  my-breadcrum" data-bs-image-src="../assets/images/banners/banner2.jpg">
                    <div className="header-text mb-0">
                        <div className="container">
                            <div className="text-center text-white ">
                                <h1 className="">Contact Us</h1>
                                <ol className="breadcrumb text-center">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active text-white" aria-current="page">Contact</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/Breadcrumb--> */}

            {/* <!--Contact--> */}
            <div className="sptb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8  col-md-12 mx-auto d-block">
                            <div className="card mb-0">
                                <div className="card-body">
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
                                            <input type="number" name="phone" required onChange={getData} id="phone" placeholder='Enter Contact Number' className='form-control' />
                                        </div>
                                        <div className="mb-1">
                                            {/* <label htmlFor="subject">subject</label> */}
                                            <input type="text" name="subject" required onChange={getData} id="subject" placeholder='Enter Subject' className='form-control' />
                                        </div>
                                        <div className="mb-1">
                                            {/* <label htmlFor="message">Message</label> */}
                                            <textarea name="message" required onChange={getData} id="message" rows="5" className='form-control'></textarea>
                                        </div>
                                        <div className="mb-1">
                                            {/* <label htmlFor="course">Course</label> */}
                                            <select name='course' required onChange={getData} id='course' className='form-control'>
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
                                            <select name='center' required onChange={getData} id='center' className='form-control'>
                                                <option value="">Select Branch</option>
                                                {
                                                    allCenters.map((item, index) => {
                                                        return <option key={index} value={item.title}>{item.title}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="mt-2">
                                            <button className='btn btn-primary btn-sm w-100' type='submit'>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Contact--> */}

            {/* <!--Statistics--> */}
            <section className="sptb bg-white">
                <div className="container">
                    <div className="section-title center-block text-center">
                        <h1>Contact Info</h1>
                        <p>Ducat India</p>
                    </div>
                    <div className="support">
                        <div className="row text-white">
                            {
                                allCenters.map((item, index) => {
                                    return <div key={index} className="col-12 mb-3">
                                        <div className="support-service home-banner br-2 mb-4 mb-xl-0">
                                            <i className="fa fa-home"></i>
                                            <h6>{item.title}</h6>
                                            <p>{item.address}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/Statistics--> */}

            {/* <section>
                    <div className="form form-spac rows con-page">
                        <div className="container">

                            <div className="spe-title col-md-12">
                                <h2><span>Contact us</span></h2>
                                <div className="title-line">
                                    <div className="tl-1"></div>
                                    <div className="tl-2"></div>
                                    <div className="tl-3"></div>
                                </div>
                                <p>India's leading IT Training Institute</p>
                            </div>
                            <div>
                                {
                                    show ? <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>: ""
                                }
                                <form onSubmit={postData}>
                                    <div className="row mb-3">
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" onChange={getData} name="name" id="name" placeholder='Enter Full Name' className='form-control' />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" onChange={getData} name="email" id="email" placeholder='Enter Email Address' className='form-control' />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <label htmlFor="contact">Contact Number</label>
                                            <input type="text" onChange={getData} name="contact" id="contact" placeholder='Enter Contact Number' className='form-control' />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" onChange={getData} name="subject" id="subject" placeholder='Enter Subject' className='form-control' />
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <label htmlFor="branch">Branch</label>
                                            <input type="text" onChange={getData} name='branch' id='branch' list="branchlist" placeholder='Select a Branch' className='form-control' />
                                            <datalist id='branchlist'>
                                                <option value="Sector 16, Noida">Sector 16, Noida</option>
                                                <option value="Sector 63, Noida">Sector 63, Noida</option>
                                                <option value="Ghaziabad">Ghaziabad</option>
                                                <option value="South Extension">South Extension</option>
                                                <option value="Pitampura">Pitampura</option>
                                                <option value="Gurugram">Gurugram</option>
                                            </datalist>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <label htmlFor="course">Course</label>
                                            <input type="text" onChange={getData} name='course' id='course' list="courselist" placeholder='Select a Course' className='form-control' />
                                            <datalist id='courselist'>
                                                <option value="Java">Java</option>
                                                <option value="Puython">Puython</option>
                                                <option value="Mern Stack">Mern Stack</option>
                                                <option value="Mean Stack">Mean Stack</option>
                                                <option value="Mean Stack">Mean Stack</option>
                                                <option value="Software Testing">Software Testing</option>
                                            </datalist>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <label htmlFor="message">Message</label>
                                                <textarea name="message" onChange={getData} id="message" rows={5} className='form-control'></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <button className='btn btn-block btn-primary' type='submit'>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="spe-title col-md-12">
                                <h2><span>Our Address</span></h2>
                                <div className="title-line">
                                    <div className="tl-1"></div>
                                    <div className="tl-2"></div>
                                    <div className="tl-3"></div>
                                </div>
                            </div>
                            <div className="pg-contact">
                                <div className="col-sm-6 col-12 new-con new-con1">
                                    <h4>Corporate Office - Noida</h4>
                                    <p><i className="fa fa-home" aria-hidden="true"></i> A - 43 & A - 52 Sector - 16, Noida (U.P) (Near McDonalds)</p>
                                    <p><i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:7070905090">70-70-90-50-90</a></p>
                                    <p><i className="fa fa-phone" aria-hidden="true"></i>/<i className="fa fa-whatsapp" aria-hidden="true"></i> <a href="tel:9999993213">+91 99-9999-3213</a></p>
                                    <p><i className="fa fa-envelope-o" aria-hidden="true"></i> <a target="_blank" href="mailto:info@ducatindia.com">info@ducatindia.com</a></p>

                                    <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="200px" id="gmap_canvas" src="https://maps.google.com/maps?q=a-43%20noida%20sector%2016&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe></div></div>
                                </div>

                                <div className="col-sm-6 col-12 new-con new-con1">
                                    <h4>Regional Office - Ghaziabad</h4>
                                    <p><i className="fa fa-home" aria-hidden="true"></i>  Anand Industrial Estate Near ITS College, Mohan Nagar Ghaziabad (U.P.)</p>
                                    <p><i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:7070905090">70-70-90-50-90</a></p>
                                    <p><i className="fa fa-phone" aria-hidden="true"></i>/<i className="fa fa-whatsapp" aria-hidden="true"></i> <a href="tel:9810851363">+91 98-10-851-363</a></p>
                                    <p><i className="fa fa-envelope-o" aria-hidden="true"></i> <a target="_blank" href="mailto: mohannagar@ducatindia.com, ghaziabad@ducatindia.com"> mohannagar@ducatindia.com, ghaziabad@ducatindia.com</a></p>
                                    <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="200px" id="gmap_canvas" src="https://maps.google.com/maps?q=Anand%20Industrial%20Estate%20Near%20ITS%20College,%20Mohan%20Nagar%20Ghaziabad%20(U.P.)&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe></div></div>
                                </div>

                                <div className="col-sm-6 col-12 new-con new-con1">
                                    <h4>Regional Office - Sector 63, Noida</h4>
                                    <p><i className="fa fa-home" aria-hidden="true"></i> H-43, Sector-63, Noida (Near Electronic City Metro Station)</p>
                                    <p><i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:7070905090">70-70-90-50-90</a></p>
                                    <p><i className="fa fa-phone" aria-hidden="true"></i>/<i className="fa fa-whatsapp" aria-hidden="true"></i> <a href="tel: 7042175774"> +91 70-42-175-774</a></p>
                                    <p><i className="fa fa-envelope-o" aria-hidden="true"></i> <a target="_blank" href="mailto:info@ducatindia.com">info@ducatindia.com</a></p>
                                    <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="200px" id="gmap_canvas" src="https://maps.google.com/maps?q=H-43,%20Sector-63,%20Noida%20(Near%20Electronic%20City%20Metro%20Station)&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe></div></div>
                                </div>

                                <div className="col-sm-6 col-12 new-con new-con1">
                                    <h4>Regional Office - Gurugram</h4>
                                    <p><i className="fa fa-home" aria-hidden="true"></i>1808/2, 2nd FLOOR OLD DLF NEAR HONDA SHOWROOM, SECTOR-14, Gurgaon (Haryana)</p>
                                    <p><i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:7070905090">70-70-90-50-90</a></p>
                                    <p><i className="fa fa-phone" aria-hidden="true"></i>/<i className="fa fa-whatsapp" aria-hidden="true"></i> <a href="tel: 9873477333"> +91 98-73-477-333</a></p>
                                    <p><i className="fa fa-envelope-o" aria-hidden="true"></i> <a target="_blank" href="mailto:info@ducatindia.com"> gurgaon@ducatindia.com</a></p>
                                    <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="200px" id="gmap_canvas" src="https://maps.google.com/maps?q=1808/2,%202nd%20FLOOR%20OLD%20DLF%20NEAR%20HONDA%20SHOWROOM,%20SECTOR-14,%20Gurgaon%20(Haryana)&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe></div></div>
                                </div>

                                <div className="col-sm-6 col-12 new-con new-con1">
                                    <h4>Regional Office -South Ex.</h4>
                                    <p><i className="fa fa-home" aria-hidden="true"></i> D-27,South Extension-1 New Delhi-110049</p>
                                    <p><i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:7070905090">70-70-90-50-90</a></p>
                                    <p><i className="fa fa-phone" aria-hidden="true"></i>/<i className="fa fa-whatsapp" aria-hidden="true"></i> <a href="tel: 9811612707"> +91 98-11-612-707</a></p>
                                    <p><i className="fa fa-envelope-o" aria-hidden="true"></i> <a target="_blank" href="mailto:info@ducatindia.com">info@ducatindia.com</a></p>
                                    <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="200px" id="gmap_canvas" src="https://maps.google.com/maps?q=D-27,South%20Extension-1%20New%20Delhi-110049&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe></div></div>
                                </div>


                                <div className="col-sm-6 col-12 new-con new-con1">
                                    <h4>Regional Office - Pitampura</h4>
                                    <p><i className="fa fa-home" aria-hidden="true"></i> Plot No. 366, 2nd Floor, Kohat Enclave, Pitampura, ( Near- Kohat Metro Station) Above Allahabad Bank, New Delhi- 110034.</p>
                                    <p><i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:7070905090">70-70-90-50-90</a></p>
                                    <p><i className="fa fa-phone" aria-hidden="true"></i>/<i className="fa fa-whatsapp" aria-hidden="true"></i> <a href="tel: 7042336264">+91 70-42-336-264</a></p>
                                    <p><i className="fa fa-envelope-o" aria-hidden="true"></i> <a target="_blank" href="mailto:info@ducatindia.com">info@ducatindia.com</a></p>
                                    <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="200px" id="gmap_canvas" src="https://maps.google.com/maps?q=Plot%20No.%20366,%202nd%20Floor,%20Kohat%20Enclave,%20Pitampura,%20(%20Near-%20Kohat%20Metro%20Station)%20Above%20Allahabad%20Bank,%20New%20Delhi-%20110034.&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe></div></div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section> */}
        </>
    )
}
