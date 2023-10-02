import React from 'react';
import HomeThreeSingleFeature from '../../../../components/HomeThreeSingleFeature/HomeThreeSingleFeature';
import {BsPersonCheck} from 'react-icons/bs';
import {MdSupportAgent} from 'react-icons/md';
import {RiPriceTag3Line} from 'react-icons/ri';
import {TiTickOutline} from 'react-icons/ti';
const HomeThreeFeatures = () => {
   return (
      <>
         <section className="tp-feature-area-three pt-115 pb-80">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     {/* <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle-three mb-20"> _ _ How We Works _ _</h5>
                        <h2 className="tp-section-title-two color-theme-blue">Excellent Techniques For <br/>Effective Cleaning</h2>
                     </div> */}
                  </div>
               </div>
               <div className="row">
                 
                  <HomeThreeSingleFeature icon={<BsPersonCheck  className='icons-section'/>} title="Expertise" subexp=" Unmatched industry knowledge and skilled technicians for reliable service."/>
                  <HomeThreeSingleFeature icon={<MdSupportAgent  className='icons-section'/>} title="Quick Response" subexp=" Swift assistance with rapid turnaround times for your convenience." />
                  <HomeThreeSingleFeature icon={<RiPriceTag3Line  className='icons-section'/>} title="Affordable Pricing" subexp="Competitive rates without compromising on quality or efficiency." />
                  <HomeThreeSingleFeature icon={<TiTickOutline  className='icons-section'/>} title="Quality Guarantee" subexp=" We stand behind our work with a satisfaction guarantee." />
           
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreeFeatures;