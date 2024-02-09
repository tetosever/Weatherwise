import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InterestPoint() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const url = `https://c9a0b6af-3fac-413c-99b9-8de6282889b3.mock.pstmn.io/places/getAll/${location}`;

    axios.get(url)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="card-header">
              #{post.id} {post.place_name}
            </div>
            <div className="card-body">
              <p className="card-text">{post.review}</p>
              <p className="card-text">{post.user_name}</p>
              <p className="card-text">{post.rating}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default InterestPoint;
