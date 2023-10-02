import React from 'react';
import { Link } from 'react-router-dom';
import {BiFridge} from 'react-icons/bi';
import {GiWashingMachine} from 'react-icons/gi';
import {TbAirConditioning} from 'react-icons/tb';
import {MdOutlineFoodBank} from 'react-icons/md';

const WorkingProcess = () => {
   return (
      <>
         <section className="tp-feature-area-three pt-120 pb-80 bg-gray-light">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-45 wow fadeInUp" data-wow-delay=".2s">
                        {/* <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Our Working Process</h5> */}
                        <h2 className="tp-section-title mb-25 heading-color-black">Our Services</h2>
                        <p>
At fastfixate, we offer a comprehensive range of appliance repair services. Whether it's a malfunctioning washing machine, refrigerator, dishwasher, or air conditioner, our technicians are equipped to diagnose and resolve the issue promptly. We specialize in repairing appliances of all major brands and models.
</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-3 col-sm-6">
                     <div className="tp-feature-three text-center mb-30 wow fadeInUp" data-wow-delay=".4s">
                        <div className="tp-feature-three-icon mb-30">
                           <img src="assets/img/icon/feature-bg.png" className="img-fluid" alt="img not found"/>
                          <GiWashingMachine  className='icons-section'/>
                        </div>
                        <div className="tp-feature-three-text">
                           <h4 className="tp-feature-three-title mb-20 heading-color-black-with-hover">
                              <Link to="/projectsDetails">Washing Machine Repair</Link></h4>
                           <p>From drum issues to electrical malfunctions, we can get your washing machine back in action.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                     <div className="tp-feature-three text-center mb-30 wow fadeInUp" data-wow-delay=".7s">
                        <div className="tp-feature-three-icon mb-30">
                           <img src="assets/img/icon/feature-bg.png" className="img-fluid" alt="img not found"/>
                           <BiFridge  className='icons-section'/>
                        </div>
                        <div className="tp-feature-three-text">
                           <h4 className="tp-feature-three-title mb-20 heading-color-black-with-hover">
                              <Link to="/projectsDetails">Refrigerator Repair</Link></h4>
                           <p>Our experts can resolve cooling problems, leaks, and any other refrigerator-related issues.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                     <div className="tp-feature-three text-center mb-30 wow fadeInUp" data-wow-delay="1s">
                        <div className="tp-feature-three-icon mb-30">
                           <img src="assets/img/icon/feature-bg.png" className="img-fluid" alt="img not found"/>
                           <MdOutlineFoodBank  className='icons-section'/>
                        </div>
                        <div className="tp-feature-three-text">
                           <h4 className="tp-feature-three-title mb-20 heading-color-black-with-hover">
                              <Link to="/projectsDetails">Dishwasher Repair</Link></h4>
                           <p>Don't let a faulty dishwasher disrupt your kitchen routine. We can have it working smoothly again.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                     <div className="tp-feature-three text-center mb-30 wow fadeInUp" data-wow-delay="1.3s">
                        <div className="tp-feature-three-icon mb-30">
                           <img src="assets/img/icon/feature-bg.png" className="img-fluid" alt="img not found"/>
                           <TbAirConditioning  className='icons-section'/>
                        </div>
                        <div className="tp-feature-three-text">
                           <h4 className="tp-feature-three-title mb-20 heading-color-black-with-hover">
                              <Link to="/projectsDetails">Air Conditioner Repair</Link></h4>
                           <p>Dubai's heat demands efficient cooling. Our AC repair services ensure you stay comfortable year-round.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default WorkingProcess;