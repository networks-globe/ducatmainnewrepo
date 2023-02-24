import React, { useEffect, useState } from 'react'
import jQuery from 'jquery';
import dynamic from 'next/dynamic'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });


import { useRouter } from 'next/router'
import { getTestimonial } from '../../store/action_creators/TestimonialAction'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

export default function Testimonials() {

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
    var dispatch = useDispatch()
    let allTestimonials = useSelector((state) => state.TestimonialStateData)
    async function getAPIData() {
        dispatch(getTestimonial())
    }
    useEffect(() => {
        (async () => {
            await getAPIData();
        })()
    }, [allTestimonials.length])
    return (
        <div className="container py-2">
            <div className="section-title center-block text-center">
                <h1>Testimonials</h1>
            </div>

            <OwlCarousel id="myCarousel5" className='owl-theme owl-carousel-icons6' {...options}>
                {
                    allTestimonials.map((item, index) => {
                        return <div key={index} className="item text-center">
                            <div className="row">
                                <div className="col-xl-8 col-md-12 d-block mx-auto">
                                    <div className="testimonia">
                                        <div className="testimonia-img mx-auto mb-3">
                                            <img src={process.env.NEXT_PUBLIC_SERVER+`/testimonial/${item.image}`} height="100px"
                                                className="img-thumbnail rounded-circle alt=" alt="" />
                                        </div>
                                        <p className='text-justify' style={{fontSize:"17px"}}>
                                            <i className="fa fa-quote-left"></i> {item.message}
                                        </p>
                                        <hr />
                                        <div className="testimonia-data">
                                            <h4 className="">{item.name}</h4>
                                            <div className="rating-star sm my-rating-5" data-stars="4s">
                                            </div>
                                        </div>
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
