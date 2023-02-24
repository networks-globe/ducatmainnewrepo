import React, { useEffect, useState } from 'react'
import jQuery from 'jquery';
import dynamic from 'next/dynamic'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });


import { useRouter } from 'next/router'
import { getCourse } from '../../store/action_creators/CourseAction'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

export default function Post() {

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 3,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 3,

            }
        },
    };
    const router = useRouter()
    let [course, setCourse] = useState([])
    var dispatch = useDispatch()
    let allCourses = useSelector((state) => state.CourseStateData)
    async function getAPIData() {
        dispatch(getCourse())
        var rdata = allCourses.filter((item) => {
            return item.popular.toLowerCase() === "yes"
        })
        if (rdata) {
            setCourse(rdata)
        }
    }
    useEffect(() => {
        (async () => {
            await getAPIData();
        })()
    }, [allCourses.length])
    return (
        <div className="container">
            <h3 className="mb-5 mt-4 text-center">Popular Courses</h3>

            <OwlCarousel id="myCarousel5" className='owl-theme owl-carousel-icons6' {...options}>
                {
                    course.map((item, index) => {
                        return <div key={index} className="item">
                            <div className="card">
                                <div className="arrow-ribbon bg-info">Best in Industry</div>
                                <div className="product-item2">
                                    <div className="product-item2-img text-center">
                                        {
                                            item.image ?
                                                <img src={process.env.NEXT_PUBLIC_SERVER + `/course/${item.image}`} alt="img" className="mx-auto" /> :
                                                <img src="../assets/images/products/8.png" alt="img" className="mx-auto" />
                                        }
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="product-item2-desc">
                                        <h4 className="font-weight-semibold text-dark" style={{ height: "50px" }}><a href="#">{item.title}</a></h4>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="product-item-wrap d-flex">
                                        <Link href={`/${item.seourl}`} className="btn home-banner text-light w-100 ms-auto">View In Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </OwlCarousel>
        </div>
    )
}
