import React from 'react';
import { Link } from 'react-router-dom';

const ServicePageArea = ({service_image_num,ser_icon_img,ser_title,colorClass, serviceDetails, LinkService}) => {
   return (
      <>
         <div className="col-lg-6">
            <div className="tp-service-three tp-service-four mb-30 wow fadeInUp" data-wow-delay="1.2s">
               <div className="tp-service-three-img">
                  <img src={`assets/img/service/service-${service_image_num}.jpg`} className="img-fluid" alt="img-not-found"/>
                     <div className="tp-service-three-img-icon">
                       {ser_icon_img}
                     </div>
                     <div className="tp-service-three-img-overlay">
                        <div className="tp-service-three-img-overlay-icon">
                        {ser_icon_img}
                        </div>
                     </div>
               </div>
               <div className="tp-service-three-text fix">
                  <h4 className={ colorClass ? "home_three_title tp-service-three-title mb-20 heading-color-black-with-hover" : "tp-service-three-title mb-20 heading-color-black-with-hover"}>
                   <Link to="/servicesDetails">{ser_title}</Link></h4>
                  <p className="mb-30">{serviceDetails}</p>
                  <div className="tp-service-three-text-btn">
                     <Link to={LinkService} className="yellow-btn service__btn">
                        <i className="flaticon-enter"></i> Learn More</Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ServicePageArea;