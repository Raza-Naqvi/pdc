import React,{useEffect,useState} from 'react'
import axios from "axios"
import BlogList from '../components/BlogList'
const Blogs = () => {

    const [posts, setposts] = useState([])

    useEffect(async() => {
        try {
            const res= await axios.get("https://jsonplaceholder.typicode.com/photos")
            setposts(res.data);
            console.log(res.data, "photos");    
        } catch (error) {
            console.log(error);
        }
        
    }, [])

    return (
        <>
         <div>
             <h1 style={{textAlign:"center"}}>Our Blogs</h1>
             <BlogList posts={posts} />
         </div>
        </>
    )
}

export default Blogs
