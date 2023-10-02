import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import ContactBreadcrumb from './ContactBreadcrumb/ContactBreadcrumb';
import ContactForm from './ContactForm/ContactForm';
import ContactMap from './ContactMap/ContactMap';
import HomeThreeNavBar from '../../HomeThree/HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import HomeThreeFooter from '../../HomeThree/HomeThree/HomeThreeFooter/HomeThreeFooter';

const Contact = () => {
   return (
      <>
               <HomeThreeNavBar/>
         <ContactBreadcrumb />
       
         <ContactForm />
         <ContactMap />
         <HomeThreeFooter/>

      </>
   );
};

export default Contact;