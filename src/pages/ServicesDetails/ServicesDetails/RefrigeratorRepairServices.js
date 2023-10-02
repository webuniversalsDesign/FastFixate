import React, { useState } from 'react';

import HomeThreeNavBar from '../../HomeThree/HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import HomeThreeFooter from '../../HomeThree/HomeThree/HomeThreeFooter/HomeThreeFooter';

import { FaArrowAltCircleRight, FaPlay } from 'react-icons/fa';
import { CgCheckO } from 'react-icons/cg';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import {MdOutlineVerified} from 'react-icons/md';
import {SiHandshake} from 'react-icons/si';
import {PiCubeTransparentBold} from 'react-icons/pi';
import {BsPersonCheck, BsFillPersonLinesFill} from 'react-icons/bs';

const RefrigeratorRepairServices = () => {
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [formData, setFormData] = useState({
      from_name: '',
      contact_no: '',
      service: '',
      user_message: '',
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch('https://fastfixate.com/fast/popup.php', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded', // Change content type
              },
              body: new URLSearchParams(formData).toString(),
          });

          if (response.ok) {
              // Handle success, e.g., show a success message
              //console.log('Form submitted successfully');
              navigate('/ThankYou');
          } else {
              // Handle failure, e.g., show an error message
              console.error('Form submission failed');
          }
      } catch (error) {
          // Handle network or other errors
          console.error('An error occurred', error);
      }
  };

  return (
    <>
      <HomeThreeNavBar />

      <Breadcrumb title="Refrigerator Repair " subTitle="Service" smText='Refrigerator'></Breadcrumb>
      <section className="tp-service-details-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4" >
              <div className="tp-faqs-left" style={{ position: "sticky", top: "120px" }}>
                <div className="tp-faqs-left-sidebar tp-services-sidebar mb-30">
                  <h4 className="tp-faqs-left-sidebar-title">Category...</h4>
                  <ul>
                    <li><Link to='/AirConditionService'>Air Conditioning Service<i> <FaArrowAltCircleRight /> </i> </Link></li>
                    <li><Link to="/RefrigeratorRepairServices">Refrigerator Service<i> <FaArrowAltCircleRight /> </i> </Link></li>
                    <li><Link to="/WashingmachineRepair">Washing Machine Repair<i> <FaArrowAltCircleRight /> </i> </Link></li>
                    <li><Link to="/DishwasherRepair">Dishwasher Repair <i> <FaArrowAltCircleRight /> </i> </Link></li>

                  </ul>
                </div>


              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tp-service-details">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="tp-service-details-img mb-30">
                      <img src="assets/img/service/fridgsection.jpg" alt="img not found" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tp-service-details-img mb-30">
                      <img src="assets/img/service/fridgesection2.jpg" alt="img not found" />
                    </div>
                  </div>
                </div>
                <h2 className="tp-section-title heading-color-black pt-10 mb-20">Refrigerator Repair Services for All Brands in Dubai: Keeping Your Cool</h2>
               
                <p className="mb-20">Refrigerators are the unsung heroes of our kitchens, tirelessly preserving our food and keeping it fresh. When your refrigerator encounters issues, it can disrupt your daily routine and potentially lead to food spoilage. Fortunately, there are refrigerator repair services in Dubai that specialize in resolving these problems. In this article, we will explore the importance of professional refrigerator repair, the benefits it offers, and how to choose the right service for your needs.</p>

                <h3 className="tp-service-details-subtitle">Why Professional Refrigerator Repair is Vital</h3>
                <p className="mb-25 d-flex"> <i > <CgCheckO /> </i> Preserve Food and Save Money: A malfunctioning refrigerator can lead to food spoilage, resulting in financial losses. Timely repairs ensure that your groceries remain fresh and safe to consume.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Prevent Costly Replacements:Replacing a refrigerator can be a significant expense. Expert repairs can extend the lifespan of your appliance, postponing the need for a costly replacement.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Energy Efficiency:A well-maintained refrigerator operates efficiently, consuming less energy. This translates into lower electricity bills and reduced environmental impact.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Safety Concerns:Refrigerators use refrigerants and electrical components. Incorrect repairs can lead to hazardous refrigerant leaks or electrical issues. Professional technicians prioritize safety.</p>
               

                <h3 className="tp-service-details-subtitle">Benefits of Professional Refrigerator Repair Services</h3>
                <p className="mb-25 d-flex"> <i > <CgCheckO /> </i> Technical Expertise: Certified technicians possess in-depth knowledge of various refrigerator brands and models. They can diagnose and resolve issues accurately, ensuring the longevity of your appliance.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Prompt Repairs: Professional repair services understand the urgency of refrigerator issues. They provide quick response times, minimizing the time your food is exposed to temperature fluctuations.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Safety Assurance: Trained technicians adhere to industry safety standards. They are equipped to handle refrigerants and electrical components safely, reducing the risk of accidents.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Cost Savings: Addressing refrigerator problems promptly can prevent minor issues from escalating into major ones. This not only saves money on repairs but also prevents food wastage.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Warranty Protection: Attempting DIY repairs or using unauthorized services may void your refrigerator's warranty. Professional repair services ensure that your warranty remains intact.</p>
               
               
            
               
               
                <h3 className="tp-service-details-subtitle">Selecting the Right Refrigerator Repair Service in Dubai</h3>
<p>In the bustling city of Dubai, a functioning refrigerator is essential for preserving your food and maintaining your lifestyle. When your refrigerator experiences issues, it's reassuring to know that professional refrigerator repair services are readily available. Trusting experts to diagnose and resolve problems ensures that your appliance continues to keep your food fresh and safe.</p>
<div className="row">
                  <div className="col-xl-6 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img src="assets/img/icon/service-feature.png" className="img-fluid" alt="img not found" />
                        <MdOutlineVerified className='icons-section'/>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/servicesDetails">Credentials</Link></h4>

        
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img src="assets/img/icon/service-feature.png" className="img-fluid" alt="img not found" />
                        <BsPersonCheck  className='icons-section'/>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/servicesDetails">Experience</Link></h4>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img src="assets/img/icon/service-feature.png" className="img-fluid" alt="img not found" />
                        <BsFillPersonLinesFill  className='icons-section'/>

                        
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/servicesDetails">Reputation</Link></h4>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img src="assets/img/icon/service-feature.png" className="img-fluid" alt="img not found" />
                        <SiHandshake  className='icons-section'/>

                        
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/servicesDetails">Promptness</Link></h4>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img src="assets/img/icon/service-feature.png" className="img-fluid" alt="img not found" />
                        <PiCubeTransparentBold className='icons-section'/>

                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/servicesDetails">Transparency</Link></h4>
                    </div>
                  </div>

         
                </div>

                <p className="mb-25 d-flex"> <i > <CgCheckO /> </i> Credentials: Verify that the repair service is licensed and certified to operate in Dubai. Check the qualifications and certifications of their technicians.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Experience: Look for a service with a proven track record of successful refrigerator repairs. Experience often correlates with expertise.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Reputation: Read customer reviews and seek recommendations to assess the service's reputation. Positive feedback from previous clients is a strong indicator of quality.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Promptness: Dubai's climate requires quick responses. Choose a service that offers timely appointments and efficient repairs to minimize inconvenience.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Transparency: Seek a repair service that provides transparent pricing and an upfront estimate. Knowing the expected costs ensures there are no surprises.</p>
               
               <p>Don't let refrigerator troubles disrupt your kitchen routine. Reach out to refrigerator repair services for all brands in Dubai to keep your cool. With their technical expertise, you can rest assured that your refrigerator will be back in optimal working condition, preserving your food and your peace of mind. Contact them today to ensure your refrigerator remains a reliable part of your daily life.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeThreeFooter />

      <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                id="modelId"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className=''>
                        Contact Us
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <input type="text" className="form-control mt-2 pb-2" placeholder="Enter Your Name" name="from_name" onChange={handleInputChange} required />
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <input type="number" className="form-control mt-2 pb-2" placeholder="Enter Your Phone Number" name="contact_no" onChange={handleInputChange} required />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <select className="form-select mt-3" name="service" onChange={handleInputChange}>
                                        <option>Select Services</option>
                                        <option>Washing Machine Service</option>
                                        <option>Refrigerator Repair</option>
                                        <option>Dishwasher Service</option>
                                        <option>AC Service & Repair</option>
                                        <option>Hob Service & Repair</option>
                                    </select>
                                </div>
                            </div>
                            <textarea type="text" rows='5' cols="10" className="form-control mt-2 pb-2" placeholder="Enter Your Message" name="user_message" onChange={handleInputChange} required></textarea>
                            <input type="submit" className="btn btn-secondary mt-4" value="Send" style={{ width: "130px" }} />
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
            
    </>
  );
};

export default RefrigeratorRepairServices;