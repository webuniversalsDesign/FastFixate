import React, { useState } from 'react';
import axios from 'axios';

const CtaArea = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    serviceName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('send-email.php', formData)  // Change the URL to your PHP file
      .then((response) => {
        console.log(response.data);
        // Handle success or show a success message to the user
      })
      .catch((error) => {
        console.error(error);
        // Handle error or show an error message to the user
      });
  };

  return (
    <>
      <section className="tp-appoint-cta-area yellow-dark-bg pt-80 pb-65">
        <div className="container">
          <div className="row align-items-center custom-mar-20">
            <div className="col-xl-2 col-lg-12 custom-pad-20">
              <div className="tp-appoint wow fadeInUp" data-wow-delay=".1s">
                <h4 className="tp-appoint-title">Online <br /> Appointment </h4>
              </div>
            </div>
            <div className="col-xl-8 col-lg-9 custom-pad-20">
              <div className="row align-items-center custom-mar-20">
                <div className="col-lg-4 custom-pad-20">
                  <div className="tp-appoint wow fadeInUp" data-wow-delay=".3s">
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 custom-pad-20">
                  <div className="tp-appoint wow fadeInUp" data-wow-delay=".5s">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-4 custom-pad-20">
                  <div className="tp-appoint select-field-arrow wow fadeInUp" data-wow-delay=".7s">
                    <select
                      name="serviceName"
                      value={formData.serviceName}
                      onChange={handleChange}
                    >
                      <option value="">Service Name</option>
                      <option value="Commercial Service">Commercial Service</option>
                      <option value="Residential Service">Residential Service</option>
                      <option value="Industrial Service">Industrial Service</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="col-xl-2 col-lg-3 custom-pad-20">
                <div className="tp-appoint text-end wow fadeInUp" data-wow-delay=".9s">
                  <button type="submit" className="theme-btn text-white">
                    <i className="flaticon-enter"></i> Submit Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaArea;
