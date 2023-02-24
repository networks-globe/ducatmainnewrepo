import Head from 'next/head'
import { useEffect } from 'react'
import {useRouter} from 'next/router'

export default function Course() {
    const router = useRouter()
    
    useEffect(() => {
        console.log(router.query)
    }, [router.query])

    return (
        <>
            <Head>
                <title>testing</title>
                <meta name="description" content="testing"/>
            </Head>
            <main>
                <section>
                    <div className="bannerimg cover-image home-banner" data-bs-image-src="/images/banners/banner2.jpg">
                        <div className="header-text mb-0">
                            <div className="container">
                                <div className="text-center text-white ">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Course</a>
                                        </li>
                                        <li className="breadcrumb-item active text-white" aria-current="page">Testing</li>
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
                                    <div className="card-body">
                                        <div className="item7-card-img">
                                            <img src="/images/photos/18.jpg" alt="img" className="w-100"/>
                                        </div>
                                        <div className="item7-card-desc d-flex mb-2 mt-3">
                                            <a href="#">
                                                <i className="fa fa-calendar-o text-muted me-2"></i>Nov-28-2018</a>
                                            <a href="#">
                                                <i className="fa fa-user text-muted me-2"></i>Nissy Sten</a>
                                        </div>
                                        <a href="#" className="text-dark">
                                            <h2 className="font-weight-semibold">Sed ut perspiciatis unde omnis iste</h2>
                                        </a>
                                        <p>Ut enim ad minima veniam, quis exercitationem, enim ad minima veniam, quis nostrum exercitationem
                                            								At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dol et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deser mollitian animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero temporin cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimusomnis voluptas assumenda est, omnis dolor repellendus.
                                        </p>
                                        <p>Ut enim ad minima veniam, quis exercitationem, enim ad minima veniam, quis nostrum exercitationem
                                            								At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dol et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deser mollitian animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero temporin cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimusomnis voluptas assumenda est, omnis dolor repellendus.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Categories</h3>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="list-catergory">
                                            <div className="item-list">
                                                <ul className="list-group mb-0">
                                                    <li className="list-group-item">
                                                        <a href="#" className="text-dark">
                                                            <i className="fa fa-building bg-primary text-primary"></i>
                                                            Real Estate
                                                            <span className="badgetext badge rounded-pill bg-secondary mb-0">14</span>
                                                        </a>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <a href="#" className="text-dark">
                                                            <i className="fa fa-bed bg-success text-success"></i>
                                                            Hostel & Travels
                                                            <span className="badgetext badge rounded-pill bg-secondary mb-0">63</span>
                                                        </a>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <a href="#" className="text-dark">
                                                            <i className="fa fa-heartbeat bg-info text-info"></i>
                                                            Health & Fitness
                                                            <span className="badgetext badge rounded-pill bg-secondary mb-0">25</span>
                                                        </a>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <a href="#" className="text-dark">
                                                            <i className="fa fa-cutlery bg-warning text-warning"></i>
                                                            Restaurant
                                                            <span className="badgetext badge rounded-pill bg-secondary mb-0">74</span>
                                                        </a>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <a href="#" className="text-dark">
                                                            <i className="fa fa-laptop bg-danger text-danger"></i>
                                                            Computer
                                                            <span className="badgetext badge rounded-pill bg-secondary mb-0">18</span>
                                                        </a>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <a href="#" className="text-dark">
                                                            <i className="fa fa-mobile bg-blue text-blue"></i>
                                                            Mobile
                                                            <span className="badgetext badge rounded-pill bg-secondary mb-0">32</span>
                                                        </a>
                                                    </li>
                                                    <li className="list-group-item border-bottom-0">
                                                        <a href="#" className="text-dark">
                                                            <i className="fa fa-pencil-square  bg-secondary text-pink"></i>
                                                            Education
                                                            <span className="badgetext badge rounded-pill bg-secondary mb-0">08</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sptb bg-white border-top">
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
                                    <input type="text" className="form-control input-lg " placeholder="Enter your Email"/>
                                    <div className="input-group-text border-0 bg-transparent p-0 ">
                                        <button type="button" className="btn btn-primary btn-lg br-te-7 br-be-7">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
