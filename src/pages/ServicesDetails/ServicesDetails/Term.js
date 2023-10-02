import React from 'react';

import HomeThreeNavBar from '../../HomeThree/HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import HomeThreeFooter from '../../HomeThree/HomeThree/HomeThreeFooter/HomeThreeFooter';

import { FaArrowAltCircleRight, FaPlay } from 'react-icons/fa';
import { CgCheckO } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import {MdOutlineVerified} from 'react-icons/md';
import {SiHandshake} from 'react-icons/si';
import {PiCubeTransparentBold} from 'react-icons/pi';
import {BsPersonCheck, BsFillPersonLinesFill} from 'react-icons/bs';

const term = () => {
  return (
    <>
      <HomeThreeNavBar />

      <Breadcrumb title="Terms &" subTitle="Condition" smText=''></Breadcrumb>
      <div className='container pt-5 mt-5'>
      <h2>Terms And Condition</h2>

<p>Please read the following terms and conditions carefully before availing of our home appliance repair services for washing machines, refrigerators, air conditioning units, and dishwashers. By using our services, you agree to abide by these terms and conditions:</p>

<h5 className='pt-5'> Service Request and Booking:</h5>
<ul>
    <li>To request a repair service, you can contact us through our website, phone, or mobile application.</li>
    <li>We will schedule a service appointment based on availability.</li>
</ul>

<h5 className='pt-5'>Service Charges:</h5>
<ul>
    <li>A service charge will be applicable for inspecting the appliance and providing a diagnosis.</li>
    <li>You will be provided with an estimate for repair costs after diagnosis.</li>
    <li>The final repair cost may vary based on the complexity of the issue and replacement parts required.</li>
</ul>

<h5 className='pt-5'>Payment:</h5>
<ul>
    <li>Payment for the service and any replacement parts must be made upon completion of the repair.</li>
    <li>We accept cash, credit/debit cards, and digital payment methods.</li>
    <li>All prices are inclusive of taxes unless specified otherwise.</li>
</ul>

<h5 className='pt-5'>Warranty:</h5>
<ul>
    <li>We offer a warranty on our repair services and replacement parts.</li>
    <li>Warranty periods may vary depending on the type of appliance and the nature of the repair.</li>
    <li>Any issues covered by the warranty will be resolved free of charge during the warranty period.</li>
</ul>

<h5 className='pt-5'>Cancellation:</h5>
<ul>
    <li>If you wish to cancel a scheduled service appointment, please notify us at least 24 hours in advance to avoid cancellation charges.</li>
    <li>Cancellation charges may apply for same-day cancellations.</li>
    {/* <li>Any issues covered by the warranty will be resolved free of charge during the warranty period.</li> */}
</ul>


<h5 className='pt-5'>Access to Appliances:</h5>
<ul>
    <li>You must provide our technicians with access to the appliance in need of repair.</li>
    <li>Ensure that the appliance is in a safe and accessible location.</li>
    {/* <li>Any issues covered by the warranty will be resolved free of charge during the warranty period.</li> */}
</ul>

<h5 className='pt-5'> Safety and Compliance:</h5>
<ul>
    <li>Our technicians will adhere to safety guidelines and follow industry-standard repair procedures.</li>
    <li>It is your responsibility to ensure that the appliance is in compliance with safety regulations and standards.</li>
    {/* <li>Any issues covered by the warranty will be resolved free of charge during the warranty period.</li> */}
</ul>

<h5 className='pt-5'> Privacy:</h5>
<ul className='pb-5'>
    <li>We respect your privacy and will handle your personal information in accordance with our privacy policy.</li>
    {/* <li>Any issues covered by the warranty will be resolved free of charge during the warranty period.</li> */}
</ul>

      </div>
      <HomeThreeFooter />
    </>
  );
};

export default term;