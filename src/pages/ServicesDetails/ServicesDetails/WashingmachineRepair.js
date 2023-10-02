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


const WashingmachineRepair = () => {
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

      <Breadcrumb title="Washing Machine Repair" subTitle="Service" smText='Washing Machine'></Breadcrumb>
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
                      <img src="assets/img/service/washmachinesection.jpg" alt="img not found" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tp-service-details-img mb-30">
                    <img src="assets/img/service/wasingMachinesection2.jpg" alt="img not found" />

                    </div>
                  </div>
                </div>
                <h2 className="tp-section-title heading-color-black pt-10 mb-20">Professional Washing Machine Repair Services in Dubai: Prolonging the Life of Your Appliance</h2>
               
                <p className="mb-20">The washing machine is an unsung hero in our daily lives, effortlessly handling our laundry needs. However, when it malfunctions, it can disrupt our routines and leave us with piles of unwashed clothes. This is where professional washing machine repair services in Dubai come to the rescue. In this article, we will explore the importance of seeking expert assistance for washing machine repairs, the numerous benefits it offers, and how to select the right service for your needs.</p>

                <h3 className="tp-service-details-subtitle">Why Choose Professional Washing Machine Repair</h3>
                <p className="mb-25 d-flex"> <i > <CgCheckO /> </i> Technical Complexity: Washing machines are intricate appliances with various components, including motors, pumps, and electronic controls. Attempting DIY repairs without the necessary expertise can lead to further damage.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Cost-Effective: While professional repairs may have an upfront cost, they are often more cost-effective in the long run. Amateurs may inadvertently worsen the problem, resulting in higher repair or replacement costs.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Efficiency and Convenience: Professional technicians can quickly diagnose and fix issues, minimizing downtime. You can have your washing machine back in operation without undue delay.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Safety Concerns: Washing machines involve electrical components and moving parts. Mishandling them can pose safety hazards. Professional repair services prioritize safety during repairs.</p>
               

                <h3 className="tp-service-details-subtitle">Benefits of Professional Washing Machine Repair Services</h3>
                <p className="mb-25 d-flex"> <i > <CgCheckO /> </i> Technical Expertise: Certified technicians possess the knowledge and skills to diagnose and repair various washing machine models accurately. They are well-versed in the intricacies of these appliances.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Prompt Resolution: Time is of the essence when it comes to washing machine repairs. Professional services understand the urgency and provide swift solutions, ensuring minimal inconvenience.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Safety Assurance: Trained technicians adhere to safety protocols when working with electrical components and machinery. This reduces the risk of accidents during repairs.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Cost Savings: Timely repairs prevent minor issues from escalating into major ones, ultimately saving you money. You won't need to invest in a costly replacement prematurely.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Warranty Protection: Unauthorized repairs or DIY attempts can void your washing machine's warranty. Professional repair services ensure that your warranty remains valid.</p>
               
               
            
               
               
                <h3 className="tp-service-details-subtitle">Selecting the Right Washing Machine Repair Service in Dubai</h3>
<p>
In the vibrant city of Dubai, a functioning washing machine is essential for maintaining our lifestyles. When your washing machine encounters issues, seeking the expertise of professional washing machine repair services is the best course of action. Trusting experts to diagnose and rectify problems ensures that your appliance continues to serve you efficiently, saving you time and money.
</p>
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
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i>  Experience: Look for a service with a proven track record of successful washing machine repairs. Experience often correlates with expertise.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i>Reputation: Read customer reviews and seek recommendations to assess the service's reputation. Positive feedback from previous clients is a strong indicator of quality.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Promptness: Dubai's climate requires quick responses. Choose a service that offers timely appointments and efficient repairs to minimize inconvenience.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Transparency: Seek a repair service that provides transparent pricing and an upfront estimate. Knowing the expected costs ensures there are no surprises.</p>
               
               <p>Don't let washing machine malfunctions disrupt your daily routine. Reach out to professional washing machine repair services in Dubai to restore the efficiency and convenience of your appliance. With their technical expertise, you can be confident that your washing machine will be back in optimal working condition, helping you maintain a clean and organized home. Contact them today to ensure your washing machine remains a reliable part of your daily life.</p>
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

export default WashingmachineRepair;