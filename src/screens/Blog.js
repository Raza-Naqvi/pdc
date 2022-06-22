import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const Blog = () => {

    const { blogsId } = useParams()
    const [post, setPost] = useState()
    useEffect(async () => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/${blogsId}`)
            setPost(res.data)

        } catch (error) {
            console.log(error);
        }
    }, [])

    let imgUrl = '';
    if (blogsId === 97) imgUrl = `https://picsum.photos/id/${101}/800/300`;
    else if (blogsId === 86) imgUrl = `https://picsum.photos/id/${102}/800/300`;
    else imgUrl = `https://picsum.photos/id/${blogsId}/800/300`;

    return (
        <>
            {
                post && (
                    <div>
                        <Link to="/blogs" className='btn btn-primary  mx-5 mt-3 '>Blogs</Link>
                        <Row>
                            <Col className='mt-5' md={{ span: 3, offset: 3 }}>
                                {/* <div>
                                    <img src={`${imgUrl}`} />
                                    <h1>{post.id}</h1>
                                    <p>{post.title}</p>
                                </div> */}
                                <Card className='cardImage'>
                                    <Card.Img variant="top" src={`${imgUrl}`} />
                                    <Card.Body>
                                        <Card.Title className='text-center'>{post.id}</Card.Title>
                                        <Card.Text className='text-center'> {post.title}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </div>
                )
            }
        </>
    )
}

export default Blog
