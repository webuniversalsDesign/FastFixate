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

const Privacy = () => {
  return (
    <>
      <HomeThreeNavBar />

      <Breadcrumb title="Privacy" subTitle="Policy" smText=''></Breadcrumb>
      <div className='container pt-5 mt-5'>
      <h2>Privacy Policy</h2>

<h5 className='pt-5'>WHAT DO WE DO WITH YOUR INFORMATION?</h5>
<p>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us, such as your name, address, and email address.</p>
    
    <p>When you browse our store, we also automatically receive your computer’s internet protocol (IP) address to provide us with information that helps us learn about your browser and operating system.
Email marketing (if applicable): With your permission, we may send you emails about our store, new products, and other updates.
</p>


<h5 className='pt-5'>Consent</h5>
<h6>How do you get my consent?</h6>
<p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery, or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.</p>
      <p>Let's ask for your personal information for a secondary reason, like marketing. We will either ask you directly for your expressed consent or allow you to say no.</p>
 <b>How do I withdraw my consent?</b>

 If, after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at any time, by contacting us at info@fastfixate.com or mailing us at: Behind Al Naseer Masjid,
Yousuf Baker Road, Deira, Dubai U.A.E.

<h5 className='pt-5'>DISCLOSURE</h5>
<p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>

<h5 className='pt-5'>PAYMENT</h5>
<p>We use Razorpay & Payu Money for processing payments. We/Razorpay/Payu do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.</p>
<p>Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover.</p>
<p>PCI-DSS requirements help ensure our store and its service providers' secure handling of credit card information.</p>
<p>For more insight, you may also want to read the terms and conditions of Razorpay on https://razorpay.com </p>

<h5 className='pt-5'>THIRD-PARTY SERVICES</h5>
<p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</p>

<p>However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their privacy policies with respect to the information we are required to provide to them for your purchase-related transactions.</p>
    <p>For these providers we recommend that you read their privacy policies so you can understand how these providers will handle your personal information.</p>
    <p>In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>
    <p>Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service. </p>
   <h5>SECURITY</h5> 
   <p>We take reasonable precautions to protect your personal information and follow industry best practices to ensure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</p>
    
    <h5>COOKIES</h5>
    <p>We use cookies to maintain the session of your user. It is not used to identify you on other websites personally.</p>
    
    <h5>CHANGES TO THIS PRIVACY POLICY</h5>
    <p>We reserve the right to modify this privacy policy anytime, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. Suppose we make material changes to this policy. In that case, we will notify you here that it has been updated so that you know what information we collect, how we use it, and under what circumstances we use and disclose it.
If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
</p>

<h5 className='pt-5'>QUESTIONS AND CONTACT INFORMATION</h5>

<p className='pb-5'>If you would like to: access, correct, amend, or delete any personal information we have about you, register a complaint, or want more information to contact our Privacy Compliance Officer at [Email] or by mail at [Address]</p>
    
    
      </div>
      <HomeThreeFooter />
    </>
  );
};

export default Privacy;