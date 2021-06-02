import React from 'react';
import '../assets/styles/components/PostsDrawer.scss'

const PostsDrawer = ({ children }) => (
  <section className="postsDrawer">
    <h2 className="postsDrawer__title">Reddit Posts</h2>
    { children }
    <h3 className="postsDrawer__dismissAll">Dismiss All</h3>
  </section>
);

export default PostsDrawer;