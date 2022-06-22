import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Card, Carousel, Col, Container, ListGroup, Nav, Row, Stack } from 'react-bootstrap'
import { faEnvelope, faUser, faHeart, faShoppingBag, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Main from '../components/Nav'
import "../screensStyle/home.css"
import img1 from "../assets/images/banner.jpg";
import $ from 'jquery';
import hover from 'jquery';
import card1 from "../assets/images/blog1.jpg"
import card2 from "../assets/images/blog2.jpg"
import card3 from "../assets/images/blog3.jpg"
import Slider from '../components/Slider'
import HomeBlog from '../components/HomeBlog'
import meat1 from "../assets/images/meat1.jpg"
import meat2 from "../assets/images/meat2.jpg"
import meat3 from "../assets/images/meat3.jpg"
import fruit1 from "../assets/images/fruit1.jpg"
import fruit2 from "../assets/images/fruit2.jpg"
import fruit3 from "../assets/images/fruit3.jpg"
import burger from "../assets/images/burger.jpg"
import fruit4 from "../assets/images/fruit4.jpg"
import Verticalsliders from '../components/VerticalSlider'

const Home = (props) => {
    const { post } = props;
    // $(document).ready(function () {
    //     $(".item1").hover(function () {
    //         $(".fontHeart").css({
    //             'opacity': '1'
    //         })
    //     })
    // });

    // const []=useState();

    // function filterdProducts(){
    //     products.filter((categoryProduct)=>{
    //         console.log(categoryProduct,"category product");
    //         return categoryProduct(products.categoryProduct.category)
    //     })
    // }
    const filterdProducts = (category) => {
        console.log(products.filter((product) => product.category === category), "category");
        // return products.filter((product)=> product.category === category)
        setProductList(products.filter((product) => product.category === category))

    }


    const products = [
        {
            name: `Product ${getRandomNumbers(1, 10)}`,
            image: "https://preview.colorlib.com/theme/ogani/img/featured/feature-1.jpg.webp",
            category: "meat",
            price: `Price ${getRandomNumbers(100, 500)}`
        },

        {
            name: `Product ${getRandomNumbers(1, 10)}`,
            image: "https://preview.colorlib.com/theme/ogani/img/featured/feature-2.jpg",
            category: "meat",
            price: `Price ${getRandomNumbers(100, 500)}`
        },

        {
            name: `Product ${getRandomNumbers(1, 10)}`,
            image: "https://preview.colorlib.com/theme/ogani/img/featured/feature-3.jpg",
            category: "meat",
            price: `Price ${getRandomNumbers(100, 500)}`
        },

        {
            name: `Product ${getRandomNumbers(1, 10)}`,
            image: "https://preview.colorlib.com/theme/ogani/img/featured/feature-4.jpg",
            category: "fruits",
            price: `Price ${getRandomNumbers(100, 500)}`
        },

        {
            name: `Product ${getRandomNumbers(1, 10)}`,
            image: "https://preview.colorlib.com/theme/ogani/img/featured/feature-6.jpg",
            category: "fruits",
            price: `Price ${getRandomNumbers(100, 500)}`
        },

        {
            name: `Product ${getRandomNumbers(1, 10)}`,
            image: "https://preview.colorlib.com/theme/ogani/img/featured/feature-7.jpg",
            category: "fruits",
            price: `Price ${getRandomNumbers(100, 500)}`
        },
        {
            name: `Product ${getRandomNumbers(1, 10)}`,
            image: "https://preview.colorlib.com/theme/ogani/img/featured/feature-8.jpg",
            category: "fruits",
            price: `Price ${getRandomNumbers(100, 500)}`
        },
        {
            name: `Product ${getRandomNumbers(1, 10)}`,
            image: "https://preview.colorlib.com/theme/ogani/img/featured/feature-6.jpg",
            category: "fastFood",
            price: `Price ${getRandomNumbers(100, 500)}`
        }

    ]

    function getRandomNumbers(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    const [productList, setProductList] = useState(products)


   
    return (
        <>

            <Row>
                <Col md={{ span: 7, offset: 3 }} className='bgImg'>
                    {/* <img src={img1} alt='' className='' /> */}
                    <div className='content'>
                        <p><b>Fruit Fresh</b></p>
                        <h1>Vegetable</h1>
                        <h2>100% Organic</h2>
                        <button className='btn btn-danger'>Shop Now</button>
                    </div>
                </Col>
            </Row>

{/* Horizontal Slider */}
            <Row>
                <Col>
                    <h1 className='text-center'>Slider</h1>
                    <Slider />
                </Col>

            </Row>

            <Row className='mt-5'>

                <Col md={12}>
                    <h1 className='text-center'>Featured Products</h1>
                    <b> <hr className='hrDivider'></hr></b>
                </Col>

            </Row>

            <Row>
                <Col md={{span:4, offset:4}}>
                    <ListGroup horizontal  className='featuredProductUl '>
                        <ListGroup.Item variant='success' action className='featuredProductLi' onClick={() => { setProductList(products) }}>All</ListGroup.Item>
                        <ListGroup.Item variant='success' action className='featuredProductLi' onClick={() => filterdProducts("fruits")} >Fruits</ListGroup.Item>
                        <ListGroup.Item variant='success' action className='featuredProductLi' onClick={() => { filterdProducts("meat") }}>Meat</ListGroup.Item>
                        <ListGroup.Item variant='success' action className='featuredProductLi' onClick={() => { filterdProducts("fastFood") }} >Fast Food</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

            {/*Featured Products Items  */}
            <Row className='mb-2 p-5'>

                {
                    productList && productList.length > 0 &&
                    productList.map((product, index) => {
                        console.log(product, "product");
                        return (<Col key={index} md={3}>

                            <img src={product.image} />
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </Col>
                        )
                    })
                }

            </Row>








            {/* Side by Side Images */}
            <Row>
                <Col md={{ span: 4, offset: 1 }} className='bgImgSideBySide1'>
                    <button className='btn btn-success btnSidebySide1'>Shop Now</button>
                </Col>
                <Col md={{ span: 4, offset: 1 }} className='bgImgSideBySide2'>
                    <button className='btn btn-success btnSidebySide2'>Shop Now</button>
                </Col>
            </Row>

            <Row className='mt-5 mb-5 p-3'>
                <Col md={12}>
                    <h1 className='text-center'>Slider</h1>

                </Col>
            </Row>
            {/* Blogs */}
            <Row>

                <Col md={12}>
                    <h1 className='text-center'>From The Blog</h1>
                    <b> <hr className='hrDivider'></hr></b>
                </Col>

            </Row>
            {/* <Row>
                <Col md={{span:3, offset:1}} className='bgBlog1'>
                
                </Col>
                
                <Col md={{span:3, offset:1}} className='bgBlog2'>
                
                </Col>
                <Col md={{span:3, offset:1}} className='bgBlog3'>
                
                </Col>
            </Row> */}
            <div style={{ marginTop: "45px" }}>
                <Row>
                    <Col md={{ offset: 1 }}>
                        <Card style={{ width: '18rem' }}>
                            {/* <Link to={`/homeblog/${post.id}`}>  */}
                            <Card.Img variant="top" src={card1} />
                            {/* </Link> */}
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">  <FontAwesomeIcon icon={faCalendar} /> 25 May</Card.Subtitle>
                                <Card.Title>
                                    Some quick example text to build on the card title and make u
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={{ offset: 1 }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={card2} />
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">  <FontAwesomeIcon icon={faCalendar} /> 25 May</Card.Subtitle>
                                <Card.Title>
                                    Some quick example text to build on the card title and make u
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={{ offset: 1 }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={card3} />
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">  <FontAwesomeIcon icon={faCalendar} /> 25 May</Card.Subtitle>
                                <Card.Title>
                                    Some quick example text to build on the card title and make u
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </div>

{/* Vertical Slider */}
            {/* <Stack className='mx-3' direction="horizontal" gap={3}>
               <div>
                    <Verticalsliders />
                    </div>
                    <div>
                    <Verticalsliders />
                    </div>
                    <div>
                    <Verticalsliders />
                    </div>
            </Stack> */}
          
            <Row className='p-5'>
                <Col md={4}>
                    <Verticalsliders />
                </Col>
                <Col md={4}>
                    <Verticalsliders />
                </Col>
                <Col md={4}>
                    <Verticalsliders />
                </Col>
            </Row>
         

        </>
    )
}

export default Home
