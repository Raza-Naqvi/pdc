import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../screensStyle/contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationArrow, faClock, faEnvelope, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import Iframe from 'react-iframe'

const Contact = () => {
    return (
        <>
            <Row className='mt-3'>
                <Col md={12}>
                    <div className='contactbg '>
                        <h1 className='text-light text-center contactHeading'>Contact Us</h1>
                        <p className='text-center text-light'>
                            <Link className='bgLink text-center text-light' to="/homeblog">Home</Link> -Contact</p>
                    </div>
                </Col>
            </Row>


            <Row className='mt-4'>
                <Col md={3} >
                    <p className='text-center'>
                        <FontAwesomeIcon className='fs-1 infoContent ' icon={faPhone} />
                    </p>
                    <h3 className='text-center'>Phone</h3>
                    <p className='text-center'>0300-000000</p>

                </Col>
                <Col md={3} >

                    <p className='text-center'>
                        <FontAwesomeIcon className='fs-1 infoContent ' icon={faLocationArrow} />
                    </p>
                    <h3 className='text-center'>Location</h3>
                    <p className='text-center'>Tum Hara Ghr</p>

                </Col>
                <Col md={3} >
                    <p className='text-center'>
                        <FontAwesomeIcon className='fs-1 infoContent ' icon={faClock} />
                    </p>
                    <h3 className='text-center'>Open Time</h3>
                    <p className='text-center'>24/7</p>

                </Col>
                <Col md={3} >
                    <p className='text-center'>
                        <FontAwesomeIcon className='fs-1 infoContent ' icon={faEnvelope} />
                    </p>
                    <h3 className='text-center'>Email</h3>
                    <p className='text-center'>admin@gmail.com</p>

                </Col>
            </Row>

            <Row>
                <Col md={12} className='mt-3'>
                    {/* <GoogleMaps /> */}
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4182.373720810702!2d67.07500173321054!3d24.863940361884744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ea3ec15fa43%3A0x5b98d272ade72efc!2sParsa%20Tower!5e0!3m2!1sen!2s!4v1641925642713!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></Iframe>
                </Col>
            </Row>

            <Row className='mt-4'>
                <Col md={12}>
                    <h2 className='text-center'>Leave Message</h2>
                </Col>
            </Row>
            <Row className='mt-4 justify-content-center'>
                <Col md={4}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Col>
                <Col md={4}>
                    <FloatingLabel controlId="floatingInput" label="Email">
                        <Form.Control type="email" placeholder="Email" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col md={8}>
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Col>
            </Row>
            <Row className='justify-content-center p-3'>
                <Col md={{ offset: 5 }}>
                    <Button className="btn btn-success text-center justify-content-center p-3">Send Message</Button>
                </Col>
            </Row>


        </>
    )
}

export default Contact
