import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg';
import { Carousel } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';

const HomeTwoHeroSection = () => {
    const [isOpen, setOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [formData, setFormData] = useState({
        from_name: '',
        contact_no: '',
        service: '',
        user_message: '',
    });
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://fastfixate.com/fast/popup.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', // Change content type
                },
                body: new URLSearchParams(formData).toString(),
            });

            if (response.ok) {
                // Handle success, e.g., show a success message
                //console.log('Form submitted successfully');
                navigate('/ThankYou');
            } else {
                // Handle failure, e.g., show an error message
                console.error('Form submission failed');
            }
        } catch (error) {
            // Handle network or other errors
            console.error('An error occurred', error);
        }
    };

    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="o4GuSJYSzrY" onClose={() => setOpen(false)} />

            <section className="tp-slider-area fix">
                <div className="tp-slider-active swiper-container">
                    <Carousel indicators={false}
                        nextIcon={<div className="swiper-button-next slide-next">
                            <i><CgArrowLongRight className="long_arrow" /></i> </div>}
                        prevIcon={<div className="swiper-button-prev slide-prev">
                            <i><CgArrowLongLeft className="long_arrow" /></i> </div>}
                    >
                        <Carousel.Item>
                            <div className="tp-single-slider tp-slider-height-two d-flex align-items-center swiper-slide" data-swiper-autoplay="5000">
                                <div className="slide-bg1 home_two_slide_bg1" data-background="assets/img/slider/Ac-banner.jpg"></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="tp-slider-wrapper-two text-center mt-35">
                                                <div className="tp-slider-video-btn-two mb-10" data-animation="fadeInUp" data-delay=".3s">
                                                </div>
                                                <div className="tp-slider-two z-index text-center bg-darken">
                                                    <Fade bottom>
                                                        <h1 className="tp-slider-title-two mb-35"><span>Air Conditioning</span> Service</h1>
                                                        <h3 className="tp-slider-subtitle-two">Reliable Air Conditioning Repair Services in Dubai, UAE</h3>
                                                    </Fade>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>

                        {/* Add more Carousel.Items for other slides */}
                    </Carousel>
                </div>
            </section>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                id="modelId"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className=''>
                        Contact Us
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <input type="text" className="form-control mt-2 pb-2" placeholder="Enter Your Name" name="from_name" onChange={handleInputChange} required />
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <input type="number" className="form-control mt-2 pb-2" placeholder="Enter Your Phone Number" name="contact_no" onChange={handleInputChange} required />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <select className="form-select mt-3" name="service" onChange={handleInputChange}>
                                        <option>Select Services</option>
                                        <option>Washing Machine Service</option>
                                        <option>Refrigerator Repair</option>
                                        <option>Dishwasher Service</option>
                                        <option>AC Service & Repair</option>
                                        <option>Hob Service & Repair</option>
                                    </select>
                                </div>
                            </div>
                            <textarea type="text" rows='5' cols="10" className="form-control mt-2 pb-2" placeholder="Enter Your Message" name="user_message" onChange={handleInputChange} required></textarea>
                            <input type="submit" className="btn btn-secondary mt-4" value="Send" style={{ width: "130px" }} />
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default HomeTwoHeroSection;
