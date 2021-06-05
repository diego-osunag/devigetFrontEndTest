import React, { useState } from 'react';
import { connect } from 'react-redux';
import { dismissAllPosts, addPosts, removeSelectedPost } from '../actions';
import PostsList from './PostsList';
import '../assets/styles/components/PostsSidebar.scss';
import menuIcon from '../assets/static/hamburguer-menu-icon.png';
import reloadIcon from '../assets/static/reload.png';

const API = 'https://www.reddit.com/r/reactjs/top.json';

const PostsSidebar = (props) => {
  
  const [isActive, setActive] = useState();

  const loadPosts = () => {
    fetch(API)
    .then(response => response.json())
    .then(responseData => {
      props.addPosts(responseData.data.children)
    })
  }

  loadPosts();
      
  const handleClick = () => {
    props.dismissAllPosts(),
    props.removeSelectedPost()
  }

  const handleRefresh = () => {
    props.dismissAllPosts();
    props.removeSelectedPost()
    loadPosts();
  }

  const handleToggle = () => {
    setActive(!isActive)
    console.log("isActive = " + isActive)
  }

  return(
    <section className={isActive ? "postsSidebar active" : "postsSidebar"}>
      <h2 className="postsSidebar__title">Reddit Posts</h2>
      <PostsList/>
      <h3 className="postsSidebar__dismissAll" onClick={ handleClick }>
        Dismiss All
      </h3>
      <img className="postsDetail__icon" src={ menuIcon } onClick={ handleToggle }/>
      <img className="postsDetail__icon--reload" src={ reloadIcon } onClick={ handleRefresh }/>
    </section>
  );
 
};

const mapDispatchToProps =  {
  dismissAllPosts, addPosts, removeSelectedPost
}

export default connect(null, mapDispatchToProps)(PostsSidebar);