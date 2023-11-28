/* eslint-disable react/prop-types */
import "./Post.css"
const Post = ({post}) => {
  // console.log(title)
  // console.log(postBody)
  const {userId, id, title, body } = post

  return (
    <div className="post-card">
        <p className="post-no"><b>Post no.</b> {id}</p>
        <p className="post-title"><b>Post Title:</b> {title}</p>
        <p className="user-id"><b>Post by user:</b> {userId}</p>
        <p className="post-body"><b>Post:</b> {body}</p>
    </div>
  )
}

export default Post