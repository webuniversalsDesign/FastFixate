import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "swiper/css/pagination";
import AppointmentSingleFeedback from '../../../../components/AppointmentSingleFeadback/AppointmentSingleFeadback';

SwiperCore.use([Navigation, Pagination]);

const AppointmentFeedback = () => {
   return (
      <>

         <section className="tp-testimonial-area-three pt-120 pb-190">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Customer Feedback</h5>
                        <h2 className="tp-section-title heading-color-black">Quality Cleaning Making <br />you Much Happy</h2>
                     </div>
                  </div>
               </div>
               <div className="tp-testimonial-three-shadow common-dots">
                  <div className="tp-testimonial-three-active swiper-container">

                     <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        style={{ paddingBottom: '80px' }}
                        className='swiper-wrapper'
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 6000 }}
                        breakpoints={{
                           550: {
                              slidesPerView: 1,
                           },
                           768: {
                              slidesPerView: 1,
                           },
                           992: {
                              slidesPerView: 2,
                           },
                           1200: {
                              slidesPerView: 3,
                           },
                        }}
                        navigation={{ nextEl: '.service-button-next', prevEl: '.service-button-prev', }}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                     >
                        <SwiperSlide>
                           <AppointmentSingleFeedback image_num="2" title="Senior Designer" name="Petar Mansion" />
                        </SwiperSlide>

                        <SwiperSlide>
                           <AppointmentSingleFeedback image_num="3" title="Senior Developer" name="Jhon Doe" />
                        </SwiperSlide>

                        <SwiperSlide>
                           <AppointmentSingleFeedback image_num="4" title="Senior Designer" name="Shane Watson" />
                        </SwiperSlide>

                        <SwiperSlide>
                           <AppointmentSingleFeedback image_num="3" title="Senior Developer" name="Jhon Doe" />
                        </SwiperSlide>

                        <SwiperSlide>
                           <AppointmentSingleFeedback image_num="2" title="Senior Designer" name="Petar Mansion" />
                        </SwiperSlide>

                        <div className="swiper-service-pagination slide-dots"></div>
                     </Swiper>
                  </div>

                  <div className="swiper-pagination-testimonial slide-dots "></div>
               </div>
            </div>
         </section>



      </>
   );
};

export default AppointmentFeedback;