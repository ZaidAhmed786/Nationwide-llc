
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Project() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Project">
                <section className="project-section section-padding fix">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/01.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Technology</p>
                                            <h4>
                                                <a href="/project-details">Platform Integration</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/02.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Security</p>
                                            <h4>
                                                <a href="/project-details">Network Security</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/03.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Solution</p>
                                            <h4>
                                                <a href="/project-details">Web Development</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/04.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Technology</p>
                                            <h4>
                                                <a href="/project-details">IT Management</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/10.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Technology</p>
                                            <h4>
                                                <a href="/project-details">Design Solutions</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="project-items">
                                    <div className="project-image">
                                        <img src="/assets/img/project/11.jpg" alt="project-img" />
                                        <div className="project-content">
                                            <p>Technology</p>
                                            <h4>
                                                <a href="/project-details">Software Development</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}