import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { faEnvelope, faUser, faHeart, faShoppingBag, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import "../componentStyle/nav.css"

const Main = (props) => {
    const { companyName } = props
    const [search, setSearch] = useState("What do you want")

    const [arrowToggle, setArrowToggle] = useState(false)

    const allDepartments = [
        "Fresh Meat",
        "Vegetables",
        "Fruits",
        "Eggs",
        "Bread",
        "Fast Food",
        "Fresh Banana"
    ]
    return (
        <>
            <Row >
                <Col md={{ span: 1, offset: 1 }}>
                    <h1>{companyName}</h1>
                </Col>
                {/* <Col md={{ span: 5, offset: 2 }}>
                    <Navbar  expand="lg">
                        <Container>
                         
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Link className='p-3 linkBtnHome linkBtn' to="/home">Home</Link>
                                    <Link className='p-3 linkBtnHome linkBtn' to="/shop">Shop</Link>
                                    <Link className='p-3 linkBtnHome linkBtn' to="/pages">Pages</Link>
                                    <Link className='p-3 linkBtnHome linkBtn' to="/blog">Blog</Link>
                                    <Link className='p-3 linkBtnHome linkBtn' to="/Contact">Contact</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col> */}
                <Col md={{ span: 3, offset: 2 }}>
                    <Navbar expand="lg">
                        <Container>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Link className='p-3 linkBtnHome linkBtn text-dark ' to="/"><b>Home</b></Link>
                                    <Link className='p-3 linkBtnHome linkBtn text-dark' to="/shop"><b>Shop</b></Link>
                                    {/* <Link className='p-3 linkBtnHome linkBtn text-dark' to="/pages"><b>Pages</b></Link> */}
                                    <Link className='p-3 linkBtnHome linkBtn text-dark' to="/blogs"><b>Blog</b></Link>
                                    <Link className='p-3 linkBtnHome linkBtn text-dark' to="/contact"><b>Contact</b></Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
                <Col md={{ span: 3, offset: 2 }} className='items py-3'>
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faShoppingBag} />
                    <p style={{ display: "inline" }}>items: $150</p>
                </Col>
                {/* <Col md={{span:3,offset:0}}>
                
                </Col> */}
            </Row>

            {/* Search bar */}
            {/* <Row>
                <Col md={3}>
                    <Navbar bg="success" variant='dark' expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavDropdown className='justify-content-center m-auto' title="All Departmants" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
                <Col md={1}>
                <Navbar  expand="lg" >
                        <Container >
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavDropdown className='justify-content-center m-auto ' title="Categories" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                   
                </Col>
                <Col md={6} className='justify-content-center m-auto mx-4'>
                <input  type="email" className="form-control w-25 searchInput"  id="exampleInputEmail1" aria-describedby="emailHelp" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                <Button className='searchBtn px-4' variant="success">Success</Button>
                </Col>
                <Col md={2}>
                    <FontAwesomeIcon icon={faPhone} />
                </Col>

            </Row> */}

            {/*  */}
            <div className='container'>
                <div>
                    <Navbar bg="success" variant='dark' expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavDropdown onClick={() => { setArrowToggle(!arrowToggle) }} className='justify-content-center m-auto' title="All Departmants" id="basic-nav-dropdown">
                                        {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                                        {
                                            arrowToggle &&
                                            <ul>{
                                                allDepartments.map((department) => {
                                                    return <li>{department}</li>
                                                })
                                            }
                                            </ul>
                                        }

                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <div>
                    <Navbar expand="lg" >
                        <Container >
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavDropdown className='justify-content-center m-auto ' title="Categories" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </div>

                <div className='searchDiv'>
                    <input type="email" className="form-control w-75   searchInput" id="exampleInputEmail1" aria-describedby="emailHelp" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                    <Button className='searchBtn px-4' variant="success">Success</Button>
                </div>
                <Container>
                <div className='mt-2'>
                    <FontAwesomeIcon icon={faPhone} className='fs-4' />
                    <p className='text-center ' style={{ display: "inline" }}> 0300-000000 </p>
                    {/* <p className='text-center'>support 24/7</p> */}
                </div>
                </Container>

            </div>

        </>
    )
}

export default Main
