import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer-section">
                <div className="footer-widgets-wrapper footer-bg">
                    {/* <div className="shape-1">
                        <img src="/assets/img/footer-shape-1.png" alt="shape-img" />
                    </div> */}
                   
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <a href="/">
                                            <h2 className="text-white">Henriksen Contracting LLC
</h2>
                                        </a>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                        At Henriksen Contracting LLC
, we are dedicated to providing top-notch internet services to homes and businesses. Our mission is to deliver fast, reliable, and affordable connectivity, ensuring you stay connected with the world seamlessly.
                                        </p>
                                        <p>
                                         Henriksen Contracting LLC

                                        </p>
                                     
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".9s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Get In Touch</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul className="contact-info">
                                            <li>
                                                <i className="fas fa-map-marker-alt" />
                                                4154 SE Capitol Cir, Grimes, IA 50111-4854
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-phone-volume" />
                                                <a href="tel:+1888359206">+1 (888) 483-4379</a>
                                            </li>
                                          <li className="d-flex">
                                            <i className="fa-regular fa-envelope mt-1" />
                                            <a
                                                href="mailto:sales@nbandwidth.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                sales@nbandwidth.com
                                            </a>
                                            </li>
                                            <li className="d-flex ">
                                                <a href="/"> <img src="./assets/img/cradit cards.png" className="img-fluid" /> </a>
                                            </li>
                                        </ul>
                                      
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <a href="/">
                                                <i className="fa-solid fa-chevron-right" />
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/about">
                                                <i className="fa-solid fa-chevron-right" />
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/service-carousel">
                                                <i className="fa-solid fa-chevron-right" />
                                                Internet Services
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/service">
                                                <i className="fa-solid fa-chevron-right" />
                                                Cable Deals
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/contact">
                                                <i className="fa-solid fa-chevron-right" />
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="single-footer-widget ">
                                    <div className="widget-head">
                                        <h3>Popular Links</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <a href="/privacy-policy">
                                                <i className="fa-solid fa-chevron-right" />
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/refund">
                                                <i className="fa-solid fa-chevron-right" />
                                                Refund Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/terms">
                                                <i className="fa-solid fa-chevron-right" />
                                                Terms and conditions
                                            </a>
                                        </li>
                                      
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-center mt-5 pt-4">
                            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                                © All Copyright {new Date().getFullYear()}  |  Henriksen  <a href="/">Contracting LLC</a> dba Nationwide Bandwidth
                            </p>
                           
                        </div>
                    </div>
                    <a href="#" id="scrollUp" className="scroll-icon">
                        <i className="far fa-arrow-up" />
                    </a>
                </div>
            </footer>

        </>
    )
}
