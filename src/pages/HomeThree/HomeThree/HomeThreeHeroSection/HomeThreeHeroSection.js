import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg';
import "swiper/css";
import "swiper/css/pagination"
// import Fade from 'react-reveal/Fade';
import SwiperCore, { Pagination, Navigation, Autoplay, A11y, EffectFade, EffectCards } from 'swiper';
import HomeThreeHeroSlide from '../../../../components/HomeThreeHeroSlide/HomeThreeHeroSlide';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay, A11y, EffectFade, EffectCards]);

const HomeThreeHeroSection = () => {

   return (
      <>

         <section className="tp-slider-area-three fix">
            <div className="tp-slider-active swiper-container">
               <Carousel indicators={false}
               nextIcon={<div className="swiper-button-next slide-next">
               <i><CgArrowLongRight className="long_arrow" /></i> </div>}
               prevIcon={<div className="swiper-button-prev slide-prev">
               <i><CgArrowLongLeft className="long_arrow" /></i> </div>}
               >
                  <Carousel.Item>
                  <div className="tp-single-slider-three tp-slider-height-three d-flex align-items-center swiper-slide" data-swiper-autoplay="5000">
                <div className="slide-bg slide_bg_three"></div>
                <div className="slider-img-three">
                    <img src="assets/img/slider/airCondition-banner.jpg" className="img-fluid" alt="img not found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-slider-three z-index">

                                <Fade left>
                                    <h6 className="tp-slider-three-subtitle" ><img src="assets/img/icon/slider-icon-1.png" className="img-fluid" alt="img not found" /> Reliable Air Conditioning Repair Services in Dubaii, UAE</h6>
                                </Fade>

                                <Fade right>
                                    <h1 className="tp-slider-three-title"> Air  
                                        <br />Conditioning <br />Service!</h1>
                                </Fade>

                                <Fade bottom>
                                    <div className="tp-slider-three-btn">
                                        <Link to="/" className="yellow-btn">
                                            <i className="flaticon-enter"></i> Learn More</Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                  </Carousel.Item>

                  <Carousel.Item>
                  <div className="tp-single-slider-three tp-slider-height-three d-flex align-items-center swiper-slide" data-swiper-autoplay="5000">
                <div className="slide-bg slide_bg_three"></div>
                <div className="slider-img-three">
                    <img src="assets/img/slider/refridgarator-banner.jpg" className="img-fluid" alt="img not found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-slider-three z-index">

                                <Fade left>
                                    <h6 className="tp-slider-three-subtitle" ><img src="assets/img/icon/slider-icon-1.png" className="img-fluid" alt="img not found" />Exceptional Refrigerator  Repair Servics for All Brands in Dubai, UAE</h6>
                                </Fade>

                                <Fade right>
                                    <h1 className="tp-slider-three-title">   Refrigerator 
                                        <br/> Service!</h1>
                                </Fade>

                                <Fade bottom>
                                    <div className="tp-slider-three-btn">
                                        <Link to="/" className="yellow-btn">
                                            <i className="flaticon-enter"></i> Learn More</Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                  </Carousel.Item>

                  <Carousel.Item>
                  <div className="tp-single-slider-three tp-slider-height-three d-flex align-items-center swiper-slide" data-swiper-autoplay="5000">
                <div className="slide-bg slide_bg_three"></div>
                <div className="slider-img-three">
                    <img src="assets/img/slider/washing-mashine-banner.jpg" className="img-fluid" alt="img not found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-slider-three z-index">

                                <Fade left>
                                    <h6 className="tp-slider-three-subtitle" ><img src="assets/img/icon/slider-icon-1.png" className="img-fluid" alt="img not found" />Swift and Professional Washing Machine Repair Services in Dubai, UAE</h6>
                                </Fade>

                                <Fade right>
                                    <h1 className="tp-slider-three-title">   Washing   
                                        <br/> Machine <br/> Repair</h1>
                                </Fade>

                                <Fade bottom>
                                    <div className="tp-slider-three-btn">
                                        <Link to="/" className="yellow-btn">
                                            <i className="flaticon-enter"></i> Learn More</Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                  </Carousel.Item>

                  <Carousel.Item>
                  <div className="tp-single-slider-three tp-slider-height-three d-flex align-items-center swiper-slide" data-swiper-autoplay="5000">
                <div className="slide-bg slide_bg_three"></div>
                <div className="slider-img-three">
                    <img src="assets/img/slider/dishWasher-banner.jpg" className="img-fluid" alt="img not found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-slider-three z-index">

                                <Fade left>
                                    <h6 className="tp-slider-three-subtitle" ><img src="assets/img/icon/slider-icon-1.png" className="img-fluid" alt="img not found" />"Efficient Dishwasher Repair Services in Dubai, Providing Timely <br/> and Affordable Services"</h6>
                                </Fade>

                                <Fade right>
                                    <h1 className="tp-slider-three-title">   Dishwasher  
                                        <br/> Repair</h1>
                                </Fade>

                                <Fade bottom>
                                    <div className="tp-slider-three-btn">
                                        <Link to="/" className="yellow-btn">
                                            <i className="flaticon-enter"></i> Learn More</Link>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                  </Carousel.Item>

               </Carousel>
            </div>
         </section>


      </>
   );
};

export default HomeThreeHeroSection;