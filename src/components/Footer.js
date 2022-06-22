import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import {  faEnvelope,faUser } from '@fortawesome/free-solid-svg-icons'
import {  faFacebookF,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "../componentStyle/footer.css"

const Footer = (props) => {
    const {email,number,companyName,address}=props

    const [emailFooter, setEmailFooter] = useState("Enter Your Email")
    
    return (
        <>
           <Row className='align-items-center footer bg-light' >
               <Col md={{span:3, offset:1}}>
                <h1>{companyName}</h1>
                <address>{address}</address>
                <p>{number}</p>
                <p>{email}</p>
               </Col>
               <Col md={{span:2,offset:0}}>
                <h2>Useful Links</h2>
                <p>About Us</p>
                <p>About Our shop</p>
                <p>Secure Shopping</p>
                <p>Delivery information</p>
                <p>Privacy Policy</p>
                <p>Our Sitemap</p>
               </Col>
               <Col md={{span:1, offset:0}} className='m-5'>
                    <p>Who we Are</p>
                    <p>Our Services </p>
                    <p>Projects </p>
                    <p>Contact </p>
                    <p>Innovation</p>

               </Col>
               <Col md={{span:3, offset:0}}>
                <p><b>Join Our Newsletter Now</b></p>
                <p>Get Your Email</p>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={emailFooter} onChange={(e)=>{setEmailFooter(e.target.value)}} />
               </Col>
           </Row>

        </>
    )
}

export default Footer
