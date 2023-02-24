
import React, { useEffect, useState } from 'react'
import jQuery from 'jquery';
import dynamic from 'next/dynamic'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });


import { useRouter } from 'next/router'
import { getPlacedStudents } from '../../store/action_creators/PlacedStudentsAction'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

export default function PlacedStudents() {

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
    let [data, setData] = useState([])
    var dispatch = useDispatch()
    let allPlacedStudents = useSelector((state) => state.PlacedStudentsStateData)
    async function getAPIData() {
        dispatch(getPlacedStudents())
        if(allPlacedStudents.length){
            setData(allPlacedStudents)
        }
    }
    useEffect(() => {
        (async () => {
            await getAPIData();
        })()
    }, [allPlacedStudents.length])
    return (
        <div className="container">
            <h3 className="mb-5 mt-4 text-center">Placed Students</h3>

            <OwlCarousel id="myCarousel5" className='owl-theme owl-carousel-icons6' {...options}>
                {
                    data.map((item, index) => {
                        return <div key={index} className="item">
                            <div className="card">
                                <div className="product-item2">
                                    <div className="product-item2-img text-center">
                                        {
                                            item.image ?
                                                <img src={process.env.NEXT_PUBLIC_SERVER + `/placedStudents/${item.image}`} alt="img" className="mx-auto" /> :
                                                <img src="../assets/images/products/8.png" alt="img" className="mx-auto" />
                                        }
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="product-item2-desc">
                                       <table className='table'>
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <td>{item.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Job Profile</th>
                                                <td>{item.role}</td>
                                            </tr>
                                            <tr>
                                                <th>Package</th>
                                                <td>{item.package}</td>
                                            </tr>
                                            <tr>
                                                <th>Company</th>
                                                <td>{item.company}</td>
                                            </tr>
                                        </tbody>
                                       </table>
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
