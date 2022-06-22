import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogItem from './BlogItem'

const BlogList = (props) => {
    const {posts} =props
    return (
        <>
            <Row>
                <Col>
                    {
                        posts && posts.length &&
                        posts.map((post)=>{
                            return <BlogItem post={post} />
                            // return <li>{post}</li>
                        })
                    }
                    
                </Col>
            </Row>
        </>
    )
}

export default BlogList
