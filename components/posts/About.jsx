import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCMS } from '../../store/action_creators/CMSAction'

export default function About() {
    var [content, setContent] = useState("")
    var disptach = useDispatch()
    var cms = useSelector((state) => state.CMSStateData)
    useEffect(() => {
        disptach(getCMS())
        if (cms.length) {
            setContent(cms[0].content)
        }
    }, [cms.length])
    return (
        <>
            <section>
                <div className="bannerimg cover-image home-banner" data-bs-image-src="../assets/images/banners/banner2.jpg">
                    <div className="header-text mb-0">
                        <div className="container">
                            <div className="text-center text-white ">
                                <h1 className="">About Us</h1>
                                <ol className="breadcrumb text-center">
                                    <li className="breadcrumb-item">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active text-white" aria-current="page">About Us</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container-fluid p-5' dangerouslySetInnerHTML={{ __html: content }} />
            </section>
        </>
    )
}
