import Head from 'next/head'
import Link from 'next/link'
import PlacedStudents from '../components/posts/PlacedStudents'


export default function about() {
    return (<>
        <Head>
            <title>Ducat India - Campus &amp; Industrial IT Training  School in Noida</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
            <section>
                <div className="bannerimg cover-image home-banner" data-bs-image-src="../assets/images/banners/banner2.jpg">
                    <div className="header-text mb-0">
                        <div className="container">
                            <div className="text-center text-white ">
                                <h1 className="">Placement</h1>
                                <ol className="breadcrumb text-center">
                                    <li className="breadcrumb-item">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active text-white" aria-current="page">Placement</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PlacedStudents/>
        </main>
    </>)
}