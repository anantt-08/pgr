import React from 'react';
import Nav from './Navbar';
import './Style/Home.css';
import "./App.css"
import Footer from './Footer.js';

import Plans from './components/Plans';

const Home = () => {
    return (
        < >
            <div className="heading-img">
                <div className="container mb-3 aos-init aos-animate"  >
                    <h1>Welcome to Praedico</h1>
                    <h2><small>Global Exquisite Robotic Stock Analyzer, Prophesying Market Trend accompanied by Neural Network &amp; Artificial  Intelligence based Soft Wares.</small></h2>
                </div>
            </div>
            <section id='why-us' className='why-us'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 aos-init a">
                            <div className="content " style={{ boxShadow: "2px 2px 5px black" }}>
                                <h3>Why Choose Praedico Global Research?</h3>
                                <br></br>
                                <big><p>
                                    Praedico has taken task to provide Basic Financial literacy all across India “Free of Cost “.
                                </p></big>
                            </div>
                        </div>
                        <div className=" col-xl-8 col-lg-7 d-flex">
                            <div className="icon-boxes d-flex flex-column justify-content-center">
                                <div className="  row">
                                    <div className=" con-items  col-xl-4 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                        <div className="icon-box mt-4 mt-xl-0" style={{ boxShadow: "2px 2px 5px" }}>
                                            <i className="bx bx-receipt"></i>
                                            <h4>Professional Aid</h4>
                                            <p>We at Praedico Global Research assist you with a professional aid, to make your investments a pleasurable one.</p>
                                        </div>
                                    </div>
                                    <div className="con-items  col-xl-4 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                        <div className="icon-box mt-4 mt-xl-0" style={{ boxShadow: "2px 2px 5px" }}>
                                            <i className="bx bx-cube-alt"></i>
                                            <h4>Accuracy</h4>
                                            <p>Our products provide you with an accuracy of more than 90% approximately, maintaining a trust between our clients.</p>
                                        </div>
                                    </div>
                                    <div className="con-items  col-xl-4 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                        <div className="icon-box mt-4 mt-xl-0" style={{ boxShadow: "2px 2px 5px" }}>
                                            <i className="bx bx-images"></i>
                                            <h4>Free of cost</h4>
                                            <p>Praedico assures to provide its’ services at least available prices, reckoning Financial Literacy Mission of praedico Global Research Pvt. Ltd.</p>
                                        </div>
                                    </div>
                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            {/* Plans page */}
            <div className="plans-bg-div">
                <Plans />  
            </div>
                   
           
            </section>



            <section id="about" className="about-b section-bg">
                <div className="container">


           

                    <div className="row">
                        <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch aos-init aos-animate" data-aos="fade-right">
                            <a href="https://www.youtube.com/watch?v=iyNveX-fVOU" className="venobox play-btn mb-4 vbox-item" data-vbtype="video" data-autoplay="true"></a>
                        </div>

                        <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                            <h4 data-aos="fade-up" className="aos-init aos-animate">About us</h4>
                            <h3 data-aos="fade-up" className="aos-init aos-animate">Who we are?</h3>
                            <p data-aos="fade-up" className="aos-init aos-animate">Neural networks or neural nets were inspired by the architecture of neuron in the human brain and we at Praedico Global Research Pvt. Ltd. are creators of these financial neurones in the field of stock market intelligence. We are India’s first finance neuron developers who are using their specially designed neural networks to accurately predict performances of stock markets around the world. We are a modern generation Fintech company which believes in discovering new research products in the field of finance with the effective use of the Artificial Intelligence. We believe in providing free world class research to people across India with highest accuracy. Our products boast of an accurate prediction of Indian Stock Market and financial products with an accuracy of more than 80%. Average Indian investors spend an average of 40k-50k in form of advisory &amp; research fees which Praedico will be bringing down to Nil in coming years.
                                <br></br><br></br>
                                <b>Our Vision -</b> To be the bellwethers in eradicating financial discrepancy around the world by providing financial access to people who don’t have money to access costly financial products.
                                <br></br><br></br>
                                <b>Our Mission -</b> To be the leader in financial products development world over. Products so developed should have highest performance and lowest fees in comparison to other financial products in the market.</p>
                        </div>
                    </div>

                </div>
            </section>

{/* SERVICES */}

            <section id="services" className="services section-bg">
                <div className="container">

                    <div className="section-title aos-init aos-animate" data-aos="fade-up">
                        <h2>Services</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up">
                            <div className="icon-box">
                                <div className="icon"><i className="fa fa-desktop"></i></div>
                                <h4 className="title"><a href="">ANALYSIS</a></h4>
                                <p className="description">We assist you with fundamental and technical analysis report of client's portfolio at certain time intervals.</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon-box">
                                <div className="icon"><i className="fa fa-bar-chart" aria-hidden="true"></i></div>
                                <h4 className="title"><a href="">PERFORMANCES</a></h4>
                                <p className="description">We perform with a stock performance at different times with a target price of 6 months, 1 year, 3 years.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="fa fa-globe"></i></div>
                                <h4 className="title"><a href="">PORTFOLIO</a></h4>
                                <p className="description">We provide you with a service for a specific portfolio, which is specified at all times and in advance to meet your specific needs.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon-box">
                                <div className="icon"><i className="fa fa-picture-o"></i></div>
                                <h4 className="title"><a href="">SERVICING</a></h4>
                                <p className="description">Classroom Special Workshop with Cash and Options Adventure.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon"><i className="fa fa-tasks"></i></div>
                                <h4 className="title"><a href="">Praedico Stock Trading Simulator</a></h4>
                                <p className="description">A simulator platform, designed for those who  keens to learn in   Stock trading but fears of  losing money.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                            <div className="icon-box">
                                <div className="icon"><i className="fa fa-calendar"></i></div>
                                <h4 className="title"><a href="">Praedico Vertual Trading</a></h4>
                                <p className="description">A virtual Trading platform where one can master their Stock Market Learning by competing with others in a live environment.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

    



            <Footer/>
        </>
    )
}

export default Home;