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

const AirConditionService = () => {

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

      <Breadcrumb title="Air Conditioning " subTitle="Service" smText='Air Conditioning'></Breadcrumb>
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
                      <img src="assets/img/service/acsection.jpg" alt="img not found" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tp-service-details-img mb-30">
                      <img src="assets/img/service/acsection2.jpg" alt="img not found" />
                    </div>
                  </div>
                </div>
                <h2 className="tp-section-title heading-color-black pt-10 mb-20">Expert Air Conditioning Repair Services in Dubai: Your Ultimate Solution for Cool Comfort</h2>
               
                <p className="mb-20">Dubai's scorching temperatures are no secret, making air conditioning an essential part of daily life.
                 Your AC unit is your ally in battling the relentless heat, but what happens when it starts to falter? The answer lies in expert 
                 air conditioning repair services in Dubai. In this article, we will explore why professional
                AC repair is crucial, the benefits it offers, and how to find the right service for your needs.</p>

                <h3 className="tp-service-details-subtitle">Why Expert Air Conditioning Repair Matters</h3>
                <p className="mb-25 d-flex"> <i > <CgCheckO /> </i> Safety Concerns: AC systems involve electricity, refrigerant gases, and complex mechanical parts. Mishandling these components can result in electrical hazards or refrigerant leaks, both of which pose serious safety risks.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Energy Efficiency: A malfunctioning AC unit can consume more energy, leading to increased electricity bills. Expert repairs ensure your system operates efficiently, saving you money in the long run.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i>  Prolonged Lifespan: Regular maintenance and timely repairs can significantly extend the lifespan of your AC unit, protecting your investment.</p>
               

                <h3 className="tp-service-details-subtitle">Benefits of Professional AC Repair Services</h3>
                <p className="mb-25 d-flex"> <i > <CgCheckO /> </i> Technical Expertise:Certified technicians possess the knowledge and expertise to diagnose issues accurately. They understand the intricacies of various AC brands and models, making them well-equipped to tackle any problem.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Prompt Resolution:AC repair professionals are trained to swiftly identify and rectify problems. This reduces downtime, ensuring you don't have to endure the discomfort of a malfunctioning AC for long.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Safety Assurance: Trained technicians prioritize safety, adhering to industry standards and safety protocols during repairs. This minimizes the risk of accidents or further damage.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i>  Cost-Effective: Professional AC repairs are cost-effective in the long term. Fixing minor issues early prevents them from escalating into more expensive problems. Additionally, an efficiently running AC consumes less energy, leading to lower utility bills.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Warranty Protection:If your AC unit is under warranty, DIY repairs or unauthorized service can void it. Professional repair services ensure warranty protection remains intact.</p>
               
               
            
               
               
                <h3 className="tp-service-details-subtitle">Finding the Right AC Repair Service in Dubai</h3>
<p>In the sweltering heat of Dubai, a malfunctioning air conditioner is more than an inconvenience; it's a discomfort that can affect your daily life. Trusting your AC repair needs to expert professionals is the key to keeping your cooling system running smoothly. Not only does it ensure prompt and accurate repairs, but it also safeguards your safety and your investment.</p>
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

                <p className="mb-25 d-flex"> <i > <CgCheckO /> </i> Credentials: Ensure the repair service is licensed and certified to operate in Dubai. Verify the technicians' certifications and training in air conditioning systems.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Experience:Look for a service with a track record of successful AC repairs. Experience often indicates reliability and expertise.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Reputation: Read reviews and ask for recommendations to gauge the reputation of the repair service. Positive customer feedback is a good indicator of quality service.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Promptness:Quick response times are essential in Dubai's climate. Choose a service that offers timely appointments and efficient repairs.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Transparency:Seek a repair service that provides clear and transparent pricing. An upfront estimate ensures you know what to expect in terms of costs.</p>
               
               <p>Don't let AC troubles ruin your comfort. Reach out to expert air conditioning repair services in Dubai for fast, reliable, and affordable solutions. With their technical expertise, your AC unit will be up and running efficiently, providing you with the cool comfort you need to thrive in the desert city of Dubai. Contact them today for immediate assistance and restore your comfort without delay.</p>
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

export default AirConditionService;