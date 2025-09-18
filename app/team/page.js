
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Team() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Team">
                <section className="team-section-4 section-padding">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="team-card-items mt-0">
                                    <div className="team-image">
                                        <img src="/assets/img/team/01.jpg" alt="team-img" />
                                        <div className="social-profile">
                                            <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            <ul>
                                                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h3>
                                            <a href="/team-details">Marvin McKinney</a>
                                        </h3>
                                        <p>Web Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="team-card-items mt-0">
                                    <div className="team-image">
                                        <img src="/assets/img/team/02.jpg" alt="team-img" />
                                        <div className="social-profile">
                                            <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            <ul>
                                                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h3>
                                            <a href="/team-details">Bessie Cooper</a>
                                        </h3>
                                        <p>President of Sales</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="team-card-items mt-0">
                                    <div className="team-image">
                                        <img src="/assets/img/team/03.jpg" alt="team-img" />
                                        <div className="social-profile">
                                            <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            <ul>
                                                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h3>
                                            <a href="/team-details">Dianne Russell</a>
                                        </h3>
                                        <p>Marketing manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="team-card-items mt-0">
                                    <div className="team-image">
                                        <img src="/assets/img/team/11.jpg" alt="team-img" />
                                        <div className="social-profile">
                                            <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            <ul>
                                                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h3>
                                            <a href="/team-details">Leslie Alexander</a>
                                        </h3>
                                        <p>Software Tester</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="team-card-items mt-0">
                                    <div className="team-image">
                                        <img src="/assets/img/team/12.jpg" alt="team-img" />
                                        <div className="social-profile">
                                            <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            <ul>
                                                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h3>
                                            <a href="/team-details">Kathryn Murphy</a>
                                        </h3>
                                        <p>General manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="team-card-items mt-0">
                                    <div className="team-image">
                                        <img src="/assets/img/team/13.jpg" alt="team-img" />
                                        <div className="social-profile">
                                            <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                            <ul>
                                                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                                <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h3>
                                            <a href="/team-details">Darrell Steward</a>
                                        </h3>
                                        <p>Medical Assistant</p>
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