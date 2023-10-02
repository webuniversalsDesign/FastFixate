import React from 'react';

const AboutFaq = () => {
   return (
      <>
         <section className="tp-faq-area pb-3">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6 order-2 order-lg-1">
                     <div className="tp-about-faq-img">
                        <img src="assets/img/about/Ourvalues.jpg" alt="img not found"/>
                     </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2">
                     <div className="tp-faq-text tp-about-faq-text pt-130 pb-120">
                        <div className="section-title-wrapper-two mb-45">
                           {/* <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Essential Questions</h5> */}
                           <h2 className="tp-section-title heading-color-black">Our Values</h2>
                        </div>
                        <div className="accordion" id="accordionExample">

                           <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                 Expertise
                                 </button>
                              </h2>
                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                 Our technicians are the backbone of our business. We've carefully curated a team of certified and experienced professionals who are experts in their field. They undergo rigorous training and stay updated with the latest advancements in appliance technology to deliver top-notch repairs.
                                 </div>
                              </div>
                           </div>

                           <div className="accordion-item">
                              <h2 className="accordion-header" id="headingTwo">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                 Customer-Centric Approach
                                 </button>
                              </h2>
                              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                 We believe that our success is intrinsically tied to your satisfaction. Our customer-centric approach places your needs at the forefront of every service call. We listen to your concerns, provide transparent explanations, and offer cost-effective solutions that cater to your specific requirements.
                                 </div>
                              </div>
                           </div>

                           <div className="accordion-item">
                              <h2 className="accordion-header" id="headingThree">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                 Integrity and Transparency
                                 </button>
                              </h2>
                              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                 Trust is the foundation of any successful relationship. We maintain the highest levels of integrity in all our interactions. Our pricing is transparent, and we provide upfront estimates, so you know exactly what to expect. No hidden fees, no surprises.
                                 </div>
                              </div>
                           </div>

                           <div className="accordion-item">
                              <h2 className="accordion-header" id="headingFour">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                 Timeliness
                                 </button>
                              </h2>
                              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                 In Dubai's fast-paced environment, time is of the essence. We understand the urgency of appliance repairs and strive to provide swift solutions. Our punctual technicians arrive on time and work efficiently to minimize downtime.
                                 </div>
                              </div>
                           </div>

                           <div className="accordion-item">
                              <h2 className="accordion-header" id="headingFive">
                                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                  Quality Assurance
                                 </button>
                              </h2>
                              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                 <div className="accordion-body">
                                 We stand by the quality of our work. All our repairs are backed by a warranty, giving you peace of mind that the job is done right. If the same issue reoccurs within the warranty period, we'll return to rectify it at no additional cost.
                                 </div>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutFaq;