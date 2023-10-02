import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import About from './pages/About/About/About';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Pricing from './pages/Pricing/Pricing/Pricing';
import Team from './pages/Team/Team/Team';
import TeamDetails from './pages/TeamDetails/TeamDetails/TeamDetails';
import Faq from './pages/Faq/Faq/Faq';
import Services from './pages/Services/Services/Services';
import ServicesDetails from './pages/ServicesDetails/ServicesDetails/ServicesDetails';
import AirConditionService from './pages/ServicesDetails/ServicesDetails/AirConditionService';
import RefrigeratorRepairServices from './pages/ServicesDetails/ServicesDetails/RefrigeratorRepairServices';
import WashingmachineRepair from './pages/ServicesDetails/ServicesDetails/WashingmachineRepair';
import DishwasherRepair from './pages/ServicesDetails/ServicesDetails/DishwasherRepair';

import Projects from './pages/Projects/Projects/Projetcs';
import ProjectsDetails from './pages/ProjectsDetails/ProjectsDetails/ProjectsDetails';
import BlogsSidebar from './pages/BlogsSidebar/BlogsSidebar/BlogsSidebar';
import BlogDetails from './pages/BlogDetails/BlogDetails/BlogDetails';
import Contact from './pages/Contact/Contact/Contact';
import { WOW } from 'wowjs';
import ScrollToTop from './components/ScrollToTop';
import HomeTwo from './pages/HomeTwo/HomeTwo/HomeTwo';
import HomeThree from './pages/HomeThree/HomeThree/HomeThree';

import Privacy from './pages/ServicesDetails/ServicesDetails/Privacy';
import Term from './pages/ServicesDetails/ServicesDetails/Term';
import ThankYou from './pages/ServicesDetails/ServicesDetails/ThankYou';


const App = () => {
  // wow animation active
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeThree />} />
          <Route path="/home" element={<Home />} />
          <Route path="/homeTwo" element={<HomeTwo />} />
          <Route path="/homeThree" element={<HomeThree />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/team" element={<Team />} />
          <Route path="/teamDetails" element={<TeamDetails />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/services" element={<Services />} />

          <Route path="/servicesDetails" element={<ServicesDetails />} />
          <Route path="/AirConditionService" element={<AirConditionService />} />
          <Route path="/RefrigeratorRepairServices" element={<RefrigeratorRepairServices />} />
          <Route path="/WashingmachineRepair" element={<WashingmachineRepair />} />
          <Route path="/DishwasherRepair" element={<DishwasherRepair />} />
          
          

          <Route path="/projects" element={<Projects />} />
          <Route path="/projectsDetails" element={<ProjectsDetails />} />
          <Route path="/blogSidebar" element={<BlogsSidebar />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Term" element={<Term />} />
          <Route path="/ThankYou" element={<ThankYou />} />
          
        </Routes>
      </BrowserRouter>
    
    </>
  );
};

export default App;