import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import "../componentStyle/header.css"



const Header = () => {
  return (
    <>
      <Row className='bg-light'>
        <Col md={{ span: 2, offset: 1 }}>
          <i className="fas fa-envelope"></i>
          <FontAwesomeIcon icon={faEnvelope} />
          {/* daniald3200@gmailcom */}

        </Col>
        <Col md={{ span: 3, offset: 0 }}>
          <p>Free Shipping for all Order of <b>$99</b></p>
        </Col>
        {/* <Col md={{span:3, offset:2}} >
                <FontAwesomeIcon icon={faFacebookF} className='fontIcon' /> 
                <FontAwesomeIcon icon={faTwitter} className='fontIcon' /> 
                <FontAwesomeIcon icon={faLinkedin} className='fontIcon' />
            </Col> */}

        <Col md={{ span: 0, offset: 1 }} >
          <FontAwesomeIcon icon={faFacebookF} />
        </Col>

        <Col md={{ span: 0, offset: 0 }} >
          <FontAwesomeIcon icon={faTwitter} />

        </Col>

        <Col md={{ span: 0, offset: 0 }} >
          <FontAwesomeIcon icon={faLinkedin} />

        </Col>
        <Col md={{ span: 2, offset: 1 }} >
          <FontAwesomeIcon icon={faUser} />
          <h5 style={{ display: "inline", padding: "5px" }}>Login</h5>

        </Col>



      </Row>
    </>
  )
}

export default Header
