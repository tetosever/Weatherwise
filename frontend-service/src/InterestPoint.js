import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InterestPoint() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then(response => response.json())
      .then(json => setPosts(json))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <div className="card-header">
            #{post.id} {post.title}
          </div>
          <div className="card-body">
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InterestPoint;

