import React from 'react';
import ServicePageArea from '../../../../components/ServiceArea/ServicePageArea';
import {BiFridge} from 'react-icons/bi';
import {GiWashingMachine} from 'react-icons/gi';
import {TbAirConditioning} from 'react-icons/tb';
import {MdOutlineFoodBank} from 'react-icons/md';

const HomeThreePopularServices = () => {
   return (
      <>
         <section className="tp-service-area-three pt-115  bg-gray-light">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".3s">
                        <h5 className="tp-section-subtitle-three mb-20">_ _ Popular Services _ _</h5>
                        <h2 className="tp-section-title-two color-theme-blue">Fast Fixate Making you Much Happy</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <ServicePageArea service_image_num="9" ser_icon_img={<GiWashingMachine  className='icons-section'/>} LinkService="/WashingmachineRepair" 
                     ser_title="Washing Machine Repair" colorclassName="home_three_title" serviceDetails="Professional washing machine repair services in Dubai. Skilled technicians, prompt diagnostics, and effective repairs for all brands and models. Restore your laundry appliances with our reliable service. Contact us now."></ServicePageArea>

                  <ServicePageArea service_image_num="10" ser_icon_img={<BiFridge  className='icons-section'/>} LinkService="/RefrigeratorRepairServices"
                     ser_title="Refrigerator Service" colorclassName="home_three_title" serviceDetails="Comprehensive refrigerator repair services for all brands in Dubai. Trustworthy technicians, quick diagnostics, and efficient repairs to ensure your fridge is back to optimal performance. Contact us today."></ServicePageArea>

                  <ServicePageArea service_image_num="11" ser_icon_img={<TbAirConditioning  className='icons-section'/>} LinkService="/AirConditionService"
                     ser_title="Air Conditioning Service" colorclassName="home_three_title" serviceDetails="Expert air conditioning repair services in Dubai. Fast, reliable, and affordable solutions to keep your AC unit running smoothly. Contact us for immediate assistance."></ServicePageArea>

                  <ServicePageArea service_image_num="12" ser_icon_img={<MdOutlineFoodBank  className='icons-section'/>} LinkService="/DishwasherRepair"
                     ser_title="Dishwasher Repair" colorclassName="home_three_title" serviceDetails="Dubai's top-notch dishwasher repair services. Our skilled technicians specialize in fixing dishwashers of all brands and models. Efficient, reliable, and hassle-free solutions to get your appliance back in working order."> </ServicePageArea>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeThreePopularServices;