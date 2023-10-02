import React from 'react';
import HomeThreeAbout from './HomeThreeAbout/HomeThreeAbout';
import HomeThreeBlogs from './HomeThreeBlogs/HomeThreeBlogs';
import HomeThreeBrand from './HomeThreeBrand/HomeThreeBrand';
import HomeThreeChoseArea from './HomeThreeChoseArea/HomeThreeChoseArea';
import HomeThreeContact from './HomeThreeContact/HomeThreeContact';
import HomeThreeCta from './HomeThreeCta/HomeThreeCta';
import HomeThreeFeatures from './HomeThreeFeatures/HomeThreeFeatures';
import HomeThreeFooter from './HomeThreeFooter/HomeThreeFooter';
import HomeThreeHeroSection from './HomeThreeHeroSection/HomeThreeHeroSection';
import HomeThreeNavBar from './HomeThreeNavBar/HomeThreeNavBar';
import HomeThreePopularServices from './HomeThreePopularServices/HomeThreePopularServices';
import HomeThreeProjects from './HomeThreeProjects/HomeThreeProjects';
import HomeThreeTestimonial from './HomeThreeTestimonial/HomeThreeTestimonial';
import HomeTwoHeroSection from '../../HomeTwo/HomeTwo/HomeTwoHeroSection/HomeTwoHeroSection';

const HomeThree = () => {
    return (
        <>
            <HomeThreeNavBar/>
            {/* <HomeThreeHeroSection/> */}
            <HomeTwoHeroSection/>
            <HomeThreeCta/>

            <HomeThreeFeatures/>
            {/* <HomeThreeAbout/> */}
            {/* <HomeThreeBrand/> */}
            <HomeThreePopularServices/>
            {/* <HomeThreeProjects/> */}
            
            {/* <HomeThreeTestimonial/> */}

            {/* <HomeThreeChoseArea/> */}
            {/* <HomeThreeBlogs/> */}
            <HomeThreeContact/>
            <HomeThreeFooter/>
         
        </>
    );
};

export default HomeThree;