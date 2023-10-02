import React from 'react';
import { Link } from 'react-router-dom';

const AboutArea = () => {
   return (
      <>
         <section className="tp-about-area position-relative pt-120 pb-90 fix">
            <div className="tp-about-shape">
               <img src="assets/img/about/about-shape-1.jpg" className="img-fluid" alt="img not found"/>
            </div>
            <div className="container">
               <div className="row justify-content-xl-between justify-content-md-center">
                  <div className="col-xl-5 col-12">
                     <div className="tp-about-img z-index wow fadeInUp" data-wow-delay=".3s">
                        <img src="assets/img/about/aboutsection1.jpg" alt="img not found"/>
                     </div>
                  </div>
                  <div className="col-xl-6 col-md-10">
                     <div className="tp-about-text z-index wow fadeInUp" data-wow-delay=".6s">
                        <div className="section-title-wrapper mb-30">
                           <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20">
                              About our Company</h5>
                           <h2 className="tp-section-title">At Fast Fixate</h2>
                        </div>
                        <p className="mb-40">we take pride in being your trusted partner for all your appliance repair needs in Dubai. We understand that your daily life revolves around the smooth functioning of your appliances, and when they break down, it can disrupt your routine and cause unnecessary stress. That's where we come in. With a commitment to excellence and a team of highly skilled technicians, we've established ourselves as a leading appliance repair service provider in Dubai.</p>
                       
                       <h5>Our Services</h5>
                       <p>At fastfixate, we offer a comprehensive range of appliance repair services. Whether it's a malfunctioning washing machine, refrigerator, dishwasher, or air conditioner, our technicians are equipped to diagnose and resolve the issue promptly. We specialize in repairing appliances of all major brands and models.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default AboutArea;