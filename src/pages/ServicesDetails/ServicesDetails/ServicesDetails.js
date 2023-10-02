import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Navigation from '../../../components/shared/Navigation/Navigation';
import ServicesDetailsBreadcrumb from './ServicesDetailsBreadcrumb/ServicesDetailsBreadcrumb';
import ServicesDetailsFaq from './ServicesDetailsFaq/ServicesDetailsFaq';
import HomeThreeNavBar from '../../HomeThree/HomeThree/HomeThreeNavBar/HomeThreeNavBar';
import HomeThreeFooter from '../../HomeThree/HomeThree/HomeThreeFooter/HomeThreeFooter';

const ServicesDetails = () => {
    return (
        <>
                    <HomeThreeNavBar/>

            <ServicesDetailsBreadcrumb />
            <ServicesDetailsFaq />
            <HomeThreeFooter/>
        </>
    );
};

export default ServicesDetails;