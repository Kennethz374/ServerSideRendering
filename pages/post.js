//this page represent a single post page
// import {withRouter} from "next/router"
import axios from "axios"
import Navbar from "../components/Navbar"

const Post = ({id,comments}) => (
  <>
  <Navbar/>
  <h1>Comments for Post #{id}</h1>
  {comments.map(comment => (
    <Comment {...comment}/>
  ))}
  </>
);

const Comment = ({email, body}) => {
  return (
    <div>
      <h5>{email}</h5>
      <p>{body}</p>
    </div>
  )
}
Post.getInitialProps = async ({query}) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`)
  const {data} = res;
  return {...query, comments:data};
};
export default Post;


// const Post = (props) => (
//   <>
//   <Navbar/>
//   <h1>Post page {props.router.query.id}</h1>
//   </>
// );
// export default withRouter(Post);





//query look at documents in next
//there is a prop call id and set to 23 or some numbers
// query is the parse object from index fetch url 


// use withRouter to wrap the whole component, and now you can see props inside withRouter under post
// access whatever you need from the components.
