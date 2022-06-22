import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BlogItem = (props) => {
    const { post } = props
    return (
        <>
            <Row>
                <Col md={{ span: 4, offset: 1 }} key={post.id} >
                    <Link to={`/blogs/${post.id}`} >
                        {/* <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src={`https://picsum.photos/id/${post.id === 97 ? 101 : post.id === 86 ? 102 : post.id}/300/300`} />
                            <Card.Body>
                                <Card.Title>{post.id}</Card.Title>
                                <Card.Text>
                                    {post.title}
                                </Card.Text>

                            </Card.Body>
                        </Card> */}
                        <Card className='cardImage'>
                            <Card.Img variant="top" src={`https://picsum.photos/id/${post.id === 97 ? 101 : post.id === 86 ? 102 : post.id}/300/300`} />
                        
                            <Card.Body>
                                <Card.Title className='text-center'>{post.id}</Card.Title>
                                <Card.Text className='text-center'> {post.title}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default BlogItem
