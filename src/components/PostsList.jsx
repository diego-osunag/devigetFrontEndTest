import React from 'react';
import '../assets/styles/components/PostsList.scss'

const PostList = ({ children }) => (
  <section className="postsList">
    <div className="postsList__container">
      { children }
    </div>
  </section>
);

export default PostList;