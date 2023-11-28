import { useEffect, useState } from 'react'
import Post from './Post';
import "./Home.css"

const Home = () => {
    const [posts, setPosts] = useState([]);
    const postUrl = "https://jsonplaceholder.typicode.com/posts";
    // const commenOnetUrl = "https://jsonplaceholder.typicode.com/posts/1/comments";
    useEffect(()=>{
        fetch(postUrl)
        .then(res => res.json())
        .then(json => setPosts(json));
    }, []);
    // console.log(posts)
  return (
    <div className='post-container'>
        {
          posts.map((post)=> <Post 
              key= {post.id}
              post = {post}
            />)
        }
    </div>
  )
}

export default Home