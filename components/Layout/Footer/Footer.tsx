import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            {/* <!--Footer Section--> */}
            <section>
                <footer className="bg-dark text-white my-footer">
                    {/* <div className="footer-main">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-12">
                                    <h6>Business Directory</h6>
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#">Company</a></li>
                                        <li><a href="#">Colleges</a></li>
                                        <li><a href="#">Hospital</a></li>
                                        <li><a href="#">Factories</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-md-12">
                                    <h6>Classifieds</h6>
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#">Real Estate</a></li>
                                        <li><a href="#">Computer</a></li>
                                        <li><a href="#">Clothing</a></li>
                                        <li><a href="#">Jobs</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2 col-md-12">
                                    <h6>Resources</h6>
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#">Support</a></li>
                                        <li><a href="/privacy">Privacy and Policy</a></li>
                                        <li><a href="/tnc">Terms and condition</a></li>
                                        <li><a href="#">Contact Details</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-12">
                                    <h6>Popular Ads</h6>
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#">Educational college Ads</a></li>
                                        <li><a href="#">Free Lancer for Web Developer</a></li>
                                        <li><a href="#">2BHK Flat In Hyderabad</a></li>
                                        <li><a href="#">BPO Jobs In Bangalore</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-12">
                                    <h6 className="mb-2">Subscribe</h6>
                                    <div className="input-group">
                                        <input type="text" className="form-control br-ts-7 br-bs-7" placeholder="Email" />
                                        <div className="input-group-text border-0 bg-transparent p-0 ">
                                            <button type="button" className="btn btn-primary br-te-7 br-be-7">
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                    <h6 className="mb-2 mt-5">Payments</h6>
                                    <ul className="payments mb-0">
                                        <li>
                                            <a href="#" className="payments-icon"><i className="fa fa-cc-amex" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="payments-icon"><i className="fa fa-cc-visa" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="payments-icon"><i className="fa fa-credit-card-alt" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="payments-icon"><i className="fa fa-cc-mastercard" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="payments-icon"><i className="fa fa-cc-paypal" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="bg-dark text-white p-0">
                        <div className="container">
                            <div className="row d-flex">
                                <div className="col-lg-8 col-sm-12  mt-2 mb-2 text-start text-center">
                                    Copyright © 2023 Develop By Ducat India All rights reserved.
                                </div>
                                <div className="col-lg-4 col-sm-12 ms-auto mb-2 mt-2">
                                    <ul className="social mb-0">
                                        <li>
                                            <a className="social-icon"  href="https://www.facebook.com/ducatEducation"><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a className="social-icon"  href="https://twitter.com/Ducat_education"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a className="social-icon"  href="https://www.linkedin.com/company/ducateducation"><i className="fa fa-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a className="social-icon"  href="https://www.youtube.com/c/DucatIndiatraining"><i className="fa fa-youtube"></i></a>
                                        </li>
                                        <li>
                                            <a className="social-icon"  href="https://www.instagram.com/ducateducation/"><i className="fa fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-dark text-white p-0 border-top">
                        <div className="container">
                            <div className="p-2 text-center footer-links">
                                <Link href="/privacy" className="btn btn-link">Privacy Policy</Link>
                                <Link href="/tnc" className="btn btn-link">Terms Of Use</Link>
                                <Link href="#" className="btn btn-link">Career</Link>
                                <Link href="#" className="btn btn-link">Blog</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
            {/* <!--/Footer Section--> */}
            <a href="#top" id="back-to-top" ><i className="fa fa-rocket"></i></a>
        </>
    )
}
