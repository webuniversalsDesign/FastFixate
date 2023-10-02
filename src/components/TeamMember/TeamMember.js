import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { RiShareLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const TeamMember = ({ image_no, name, title }) => {
   return (
      <>
         <div className="col-xl-3 col-md-6">
            <div className="tp-service-two text-center mb-45 wow fadeInUp" data-wow-delay="1.3s">
               <div className="tp-service-two-img mb-35">
                  <div className="tp-service-two-img-box">
                     <img src={`assets/img/service/service-${image_no}.jpg`} className="img-fluid" alt="img not found" />
                  </div>
                  <div className="tp-service-two-icon-wrapper">
                     <div className="tp-service-two-icon">
                        <ul>
                           <li><a href="/"><i> <BsInstagram /> </i></a></li>
                           <li><a href="/"><i> <BsTwitter /> </i></a></li>
                           <li><a href="/"><i> <FaFacebookF /> </i></a></li>
                        </ul>
                        <a href="#" className="share-icon">
                           <i><RiShareLine className='share_icon' /></i>
                        </a>
                     </div>
                  </div>
               </div>
               <div className="tp-service-two-content">
                  <h4 className="tp-service-two-title"><Link to="/teamDetails">{name}</Link></h4>
                  <span>{title}</span>
               </div>
            </div>
         </div>
      </>
   );
};

export default TeamMember;