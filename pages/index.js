import Link from "next/link";
import Navbar from "../components/Navbar"
import axios from "axios";

function Index ({posts}) {
  // props.posts or just { posts }
  return (
    <div>
      <Navbar/>
      <h1>Hello page here !!!</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
};

Index.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  const {data} = res;
  console.log(data[0])
  return {posts: data, mood:"happy"};
};

export default Index;
//this is the root page;
//create route for each page  index page === "/" route
//the link will do client side rendering

// the fetched data need to return an object so it can become a prop for index
// so posts will be a prop in index