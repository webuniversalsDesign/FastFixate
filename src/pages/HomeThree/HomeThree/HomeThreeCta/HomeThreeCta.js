import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomeThreeCta = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        serviceName: '1', // Default service name
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
            const response = await fetch('https://fastfixate.com/fast/send-email.php', {
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
        <section className="tp-appoint-cta-area blue-dark-bg pt-80 pb-65">
            <div className="container">
                <div className="row align-items-center custom-mar-20">
                    <div className="col-xl-2 col-lg-12 custom-pad-20">
                        <div className="tp-appoint wow fadeInUp" data-wow-delay=".2s">
                            <h4 className="tp-appoint-title text-white">Online <br/> Appointment </h4>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-9 custom-pad-20">
                        <form onSubmit={handleSubmit}> {/* Added onSubmit handler to the form */}
                            <div className="row align-items-center custom-mar-20">
                                <div className="col-lg-4 custom-pad-20">
                                    <div className="tp-appoint tp-appoint-three wow fadeInUp" data-wow-delay=".4s">
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 custom-pad-20">
                                    <div className="tp-appoint tp-appoint-three wow fadeInUp" data-wow-delay=".6s">
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 custom-pad-20">
                                    <div className="tp-appoint tp-appoint-three select-field-arrow wow fadeInUp" data-wow-delay=".8s">
                                        <select
                                            name="serviceName"
                                            value={formData.serviceName}
                                            onChange={handleInputChange}
                                        >
                                            <option value="1">Service Name</option>
                                            <option value="Washing Machine Repair">Washing Machine Repair</option>
                                            <option value="Refrigerator Service">Refrigerator Service</option>
                                            <option value="Air Conditioning Service">Air Conditioning Service</option>
                                            <option value="Dishwasher Repair">Dishwasher Repair</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 custom-pad-20">
                                <button type="submit" className="theme-btn text-white">
                                    <i className="flaticon-enter"></i> Submit Now
                                </button>
                            </div>
                        </form>
                        {message && <p>{message}</p>} {/* Display the success/error message */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeThreeCta;
