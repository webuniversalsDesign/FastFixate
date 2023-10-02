import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: '',
        serviceName: '',
    });

    const [message, setMessage] = useState(''); // To display success/error message
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://fastfixate.com/fast/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', // Change content type
                },
                body: new URLSearchParams(formData).toString(), // Convert data to URL-encoded form
            });

            if (response.ok) {
                //setMessage('Form submitted successfully.');
                navigate('/ThankYou');
            } else {
                setMessage('Form submission failed. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <section className="tp-contact-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <div className="section-title-wrapper-two mb-50 wow fadeInUp" data-wow-delay=".2s">
                            <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Get Free Estimate</h5>
                            <h2 className="tp-section-title heading-color-black">If you Have Any Query, Don’t Hesitate <br/>Contact us</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="row custom-mar-20">
                            <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="tp-contact-info-icon">
                                        <i className="fa fa-map-marker-alt contact_icon"></i>
                                    </div>
                                    <div className="tp-contact-info-text">
                                        <h4 className="tp-contact-info-title mb-15">Address</h4>
                                        <p>Behind Al Naseer Masjid,  <br/> Yousuf Baker Road, Deira, Dubai U.A.E.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="tp-contact-info-icon">
                                        <i className="fa fa-phone-alt contact_icon"></i>
                                    </div>
                                    <div className="tp-contact-info-text">
                                        <h4 className="tp-contact-info-title mb-15">Phone</h4>
                                        <a href="tel:+971 561 706 233">+971 561 706 233</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".8s">
                                    <div className="tp-contact-info-icon">
                                        <i className="fa fa-envelope-open contact_icon"></i>
                                    </div>
                                    <div className="tp-contact-info-text">
                                        <h4 className="tp-contact-info-title mb-15">Email</h4>
                                        <a href="mailto:info@fastfixate.com">info@fastfixate.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tp-contact-form">
                            <div className="row custom-mar-20">
                                <div className="col-md-6 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <input
                                            type="text"
                                            placeholder="Full name"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <input
                                            type="text"
                                            placeholder="Phone"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 custom-pad-20">
                                    <div className="tp-contact-form-field select-field-arrow mb-20">
                                        <select
                                            name="serviceName"
                                            value={formData.serviceName}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Choose Subject</option>
                                            <option value="House Cleaning">House Cleaning</option>
                                            <option value="Office Cleaning">Office Cleaning</option>
                                            <option value="Kitchen Cleaning">Kitchen Cleaning</option>
                                            <option value="Club Cleaning">Club Cleaning</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12 custom-pad-20">
                                    <div className="tp-contact-form-field mb-20">
                                        <textarea
                                            placeholder="Your Message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 custom-pad-20">
                                    <div className="tp-contact-form-field">
                                        <button type="submit" className="theme-btn text-white" onClick={handleSubmit}>
                                            <i className="flaticon-enter"></i> Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
