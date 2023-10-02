import React, { useState } from 'react';

import HomeThreeNavBar from '../../HomeThree/HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import HomeThreeFooter from '../../HomeThree/HomeThree/HomeThreeFooter/HomeThreeFooter';

import { FaArrowAltCircleRight, FaPlay } from 'react-icons/fa';
import { CgCheckO } from 'react-icons/cg';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import {PiMoneyThin} from 'react-icons/pi';
import {SiHandshake} from 'react-icons/si';
import {BsPersonFillCheck} from 'react-icons/bs';
import {BsPersonCheck, BsFillPersonLinesFill} from 'react-icons/bs';

const DishwasherRepair = () => {
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

      <Breadcrumb title="Dishwasher Repair" subTitle="Service" smText='Dishwasher'></Breadcrumb>
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
                      <img src="assets/img/service/dishwasher.jpg" alt="img not found" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tp-service-details-img mb-30">
                      <img src="assets/img/service/dishwasher2.jpg" alt="img not found" />
                    </div>
                  </div>
                </div>
                <h2 className="tp-section-title heading-color-black pt-10 mb-20">Dishwasher Repair Services in Dubai: Restoring Convenience to Your Kitchen</h2>
               
                <p className="mb-20">In today's fast-paced world, the dishwasher has become an indispensable appliance in our kitchens. It not only saves us valuable time and effort but also ensures sparkling clean dishes after every meal. However, like all appliances, dishwashers can encounter issues over time. When your dishwasher malfunctions, it can disrupt your daily routine and add to your workload. That's where professional dishwasher repair services in Dubai come to the rescue.</p>

                <h3 className="tp-service-details-subtitle">Common Dishwasher Problems</h3>
                <p>Before delving into the benefits of professional dishwasher repair services in Dubai, let's explore some common dishwasher problems that homeowners often encounter:</p>
                <p className="mb-25 d-flex"> <i > <CgCheckO /> </i>  Dishes Not Getting Clean: If your dishes come out of the dishwasher still dirty or covered in residue, it may indicate issues with the water pressure, spray arm, or detergent dispenser.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Water Leakage:Water leakage is a common problem, and it can lead to damage not only to the dishwasher but also to your kitchen floor and cabinets.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Strange Noises:Unusual noises such as grinding, buzzing, or clanking can be signs of a malfunctioning motor, pump, or other internal components.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Dishwasher Not Draining:If your dishwasher doesn't drain properly, it can lead to stagnant water in the appliance, resulting in unpleasant odors and potential damage.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Door Seal Problems:A damaged door seal can lead to water leaks and inefficient cleaning.</p>
               

                <h3 className="tp-service-details-subtitle">Benefits of Professional Dishwasher Repair Services in Dubai</h3>
                <p className="mb-25 d-flex"> <i > <CgCheckO /> </i> Expertise and Experience:Professional technicians are well-trained and experienced in diagnosing and repairing a wide range of dishwasher issues. They can quickly identify the root cause of the problem and provide an effective solution.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i>  Cost-Effective:Opting for professional repair services can often save you money in the long run. Attempting DIY repairs without the necessary expertise can lead to further damage and costly replacements. Professional repairs ensure that the problem is fixed correctly the first time.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Time-Saving: Dealing with a malfunctioning dishwasher can be time-consuming and frustrating. Professional repair services can get your dishwasher back to working condition swiftly, allowing you to reclaim your valuable time and maintain your daily routine.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Safety:Dishwasher repair may involve working with electrical components and plumbing connections. Professionals are trained to handle these tasks safely, reducing the risk of accidents or injuries.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Guaranteed Repairs:Reputable repair services often offer warranties on their work. This means that if the same issue reoccurs within a specified period, they will return to fix it at no additional cost.</p>
               
               
            
               
               
                <h3 className="tp-service-details-subtitle">Choosing the Right Dishwasher Repair Service in Dubai</h3>
<p>
When selecting a dishwasher repair service in Dubai, consider the following factors:
</p>
                <div className="row">
                  <div className="col-xl-6 col-md-6">
                    <div className="tp-service-details-feature text-center bg-gray-light mb-40">
                      <div className="tp-feature-three-icon mb-25">
                        <img src="assets/img/icon/service-feature.png" className="img-fluid" alt="img not found" />
                        <PiMoneyThin  className='icons-section'/>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/servicesDetails">Transparent Pricing</Link></h4>

        
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
                        <BsPersonFillCheck  className='icons-section'/>
                      </div>
                      <h4 className="tp-service-details-feature-title">
                        <Link to="/servicesDetails">Certified Technicians</Link></h4>
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

         
                </div>

                <p className="mb-25 d-flex"> <i > <CgCheckO /> </i> Experience :Look for a company with a proven track record of successfully repairing dishwashers. Experience is often a good indicator of expertise.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Certified Technicians: Ensure that the technicians are certified and trained to work on your specific dishwasher brand and model.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Reputation: Read customer reviews and testimonials to gauge the reputation and reliability of the repair service.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i>  Promptness: A quick response time is crucial when dealing with a malfunctioning dishwasher. Choose a service that offers timely appointments and efficient repairs.</p>
                <p className="mb-35 d-flex"> <i > <CgCheckO /> </i> Transparent Pricing: Seek a repair service that provides clear and transparent pricing, including an estimate before the work begins.</p>
               
               <p>A malfunctioning dishwasher can disrupt your daily routine and add stress to your life. However, with professional dishwasher repair services in Dubai, you can quickly restore convenience to your kitchen. These services offer expertise, cost-effectiveness, and peace of mind, ensuring that your dishwasher operates efficiently for years to come. Don't let a dishwasher problem linger—contact a trusted repair service and enjoy the benefits of a fully functional appliance once again.</p>
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

export default DishwasherRepair;