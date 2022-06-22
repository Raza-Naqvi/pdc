import React, { useState } from 'react'
import { Card, Col, Container, Dropdown, Form, FormControl, Image, InputGroup, Row, SplitButton } from 'react-bootstrap'
import shopbg from "../assets/images/shopbg.jpg"
import "../screensStyle/shop.css"
import { Link } from 'react-router-dom'
import ShopSlider from "../components/ShopSlider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faThLarge, faHeart, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ShopPriceSlider from "../components/ShopPriceSlider"
import ShopPopularSizes from "../components/ShopPopularSizes"


const Shop = () => {

    const Department = [
        "Fresh Fuits",
        "Vegetables",
        "Fruits and Nut Gifts",
        "Fresh Berries",
        "Ocean Food",
        "Butter and Eggs",
        "Fast Food",
        "Fresh Onion",
        "Papayaya & Crisps"
    ]

    const productImages = [
        "https://preview.colorlib.com/theme/ogani/img/product/product-1.jpg",
        "https://preview.colorlib.com/theme/ogani/img/product/product-2.jpg",
        "https://preview.colorlib.com/theme/ogani/img/product/product-3.jpg",
        "https://preview.colorlib.com/theme/ogani/img/product/product-4.jpg",
        "https://preview.colorlib.com/theme/ogani/img/product/product-5.jpg",
        "https://preview.colorlib.com/theme/ogani/img/product/product-6.jpg",
        "https://preview.colorlib.com/theme/ogani/img/product/product-7.jpg",
        "https://preview.colorlib.com/theme/ogani/img/product/product-8.jpg"
    ]
    function getRandomNumbers(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
    const [productName, setProductName] = useState(1)
    return (
        <>

            <Row className='mt-3'>
                <Col md={12}>
                    <div className='shopbg '>
                        <h1 className='text-light text-center shopHeading'>Organi Shop</h1>
                        <p className='text-center text-light'>
                            <Link className='bgLink text-center text-light' to="/homeblog">Home</Link> -Shop</p>
                    </div>
                </Col>
            </Row>

            <Container fluid>
                <Row>
                    <Col md={4} className=' p-5'>
                        <h1 className='text-center'>Department</h1>
                        <ul>
                            {
                                Department.map((items, index) => {
                                    return (
                                        <div>
                                            <li className='pt-3'>{items}</li>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                        <Row>
                            <Col md={12} className='mt-3'>
                                <ShopPriceSlider />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
                                <Form.Control
                                    type="color"
                                    id="exampleColorInput"
                                    defaultValue="#563d7c"
                                    title="Choose your color"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={9} >
                                <ShopPopularSizes />
                            </Col>
                        </Row>



                    </Col>
                    <Col md={8} className='pt-5 '>
                        <ShopSlider />

                        <hr className='m-5' />

                        <Row className='m-3'>
                            <Col md={3} >
                                <InputGroup className="mb-3">
                                    <SplitButton
                                        variant="outline-secondary"
                                        title="Sort By"
                                        id="segmented-button-dropdown-1"
                                    >
                                        <Dropdown.Item href="#">Action</Dropdown.Item>
                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                    </SplitButton>

                                </InputGroup>
                            </Col>
                            <Col md={6}>
                                <p className='text-center'><b>16</b> Products Found</p>
                            </Col>
                            <Col md={3} className='text-end '>
                                <FontAwesomeIcon className='m-2' icon={faList} />
                                <FontAwesomeIcon className='m-2' icon={faThLarge} />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                {
                                    <Row xs={1} md={3} className="g-4">
                                        {productImages.map((items, idx) => (
                                            <Col>
                                                <Card className='cardImage'>
                                                    <Card.Img variant="top" src={items} />
                                                    <Card.Text className='fontShoppingBag'><FontAwesomeIcon icon={faShoppingBag} /> </Card.Text>
                                                    <Card.Text className='fontShoppingCart'><FontAwesomeIcon icon={faShoppingCart} /> </Card.Text>
                                                    <Card.Body>
                                                        <Card.Title className='text-center'>{`Product ${getRandomNumbers(1, 10)}`}</Card.Title>
                                                        <Card.Text className='text-center'> {`Price $ ${getRandomNumbers(100, 500)}`}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>

                                }
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Shop
