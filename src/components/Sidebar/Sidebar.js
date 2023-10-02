import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import Collapsible from 'react-collapsible';

const Sidebar = ({ show, handleClose }) => {
   const Home = <NavLink to="/">Home</NavLink>
   const Pages = <NavLink to="/about">About </NavLink>
   const Services = <NavLink to="/">Services </NavLink>
   // const Projects = <NavLink to="/projects">Projects</NavLink>
   // const Blog = <NavLink to="/blogSidebar">Blog</NavLink>
   return (
      <>

         <div className='side__bar'>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
               <Offcanvas.Header closeButton>
                  {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
               </Offcanvas.Header>
               <Offcanvas.Body>


                  <Collapsible trigger={Home} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                       
                   
                     </ul>
                  </Collapsible>

                  <Collapsible trigger={Pages} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     {/* <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/appointment">Appointment</NavLink></li>
                        <li><NavLink to="/pricing">Pricing</NavLink></li>
                        <li><NavLink to="/team">Team</NavLink></li>
                        <li><NavLink to="/teamDetails">Team Details</NavLink></li>
                        <li><NavLink to="/faq">Faq</NavLink></li>
                     </ul> */}
                  </Collapsible>

                  <Collapsible trigger={Services} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                     <li><NavLink to="/WashingmachineRepair">Washing Machine Repair</NavLink></li>
                                       <li><NavLink to="/RefrigeratorRepairServices">Refrigerator Service</NavLink></li>
                                       <li><NavLink to="/AirConditionService">Air Conditioning Service</NavLink></li>
                                       <li><NavLink to="/DishwasherRepair">Dishwasher Repair</NavLink></li>
                     </ul>
                  </Collapsible>

                  {/* <Collapsible trigger={Projects} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/projectsDetails">Projects Details</NavLink></li>
                     </ul>
                  </Collapsible> */}
{/* 
                  <Collapsible trigger={Blog} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/blogSidebar">Blog Sidebar</NavLink></li>
                        <li><NavLink to="/blogDetails">Blog Details</NavLink></li>
                     </ul>
                  </Collapsible> */}

             

                  <div className='contact_nav text-white font-bold'>
                     <NavLink className="font-bold" to="/contact">Contact</NavLink>
                  </div>

                  <div className="fix">
                     <div className="side-info">
                        <div className="side-info-content">
                           <div className="tp-mobile-menu"></div>
                           <div className="contact-infos mb-30">
                              <div className="contact-list mb-30">
                                 <h4>Contact Info</h4>
                                 <ul>
                                    <li><i className="flaticon-pin"></i>Behind Al Naseer Masjid, Yousuf Baker Road, Deira, Dubai U.A.E.</li>
                                    <li><i className="flaticon-email"></i><a href="mailto:info@fastfixate.com">info@fastfixate.com</a></li>
                                    <li><i className="flaticon-phone-call"></i><a href="tel:+971 561 706 233">+971 561 706 233</a></li>
                                 </ul>
                                 <div className="sidebar__menu--social">
                                    <a className="text-white" href="/"><i><FaFacebookF className='icon' /> </i></a>
                                    <a className="text-white" href="/"><i><BsTwitter className='icon' /> </i></a>
                                    <a className="text-white" href="/"><i><BsInstagram className='icon' /> </i></a>
                                    <a className="text-white" href="/"><i><AiOutlineGoogle className='icon' /> </i></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;