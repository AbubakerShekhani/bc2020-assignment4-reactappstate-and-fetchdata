import React, {useEffect} from 'react';
import './index.css';
import axios from 'axios';

export default function Reddit() {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
      const newPosts = res.data.data.children.map(obj => obj.data);

      setPosts(newPosts);
    });
  }, []);

  return (
    <div>
      <h1>Future Assignment Reddit LIVE (fetching data)</h1>
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={post.url}>
              {post.title}
            </a>{" "}
            | <b>Ups: {post.ups}</b> | <i>By {post.name}</i>
          </li>
        ))}
      </ul>
    </div>
  );
}