/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { dismissAllPosts, addPosts, removeSelectedPost } from '../actions';
import PostsList from './PostsList';
import '../assets/styles/components/PostsSidebar.scss';
import menuIcon from '../assets/static/hamburguer-menu-icon.png';
import leftIcon from '../assets/static/left-arrow.png';
import reloadIcon from '../assets/static/reload.png';
import '../swiped-events.min';

const API = 'https://www.reddit.com/r/reactjs/top.json';

const PostsSidebar = (props) => {

  const loadPosts = () => {
    fetch(API)
      .then((response) => response.json())
      .then((responseData) => {
        props.addPosts(responseData.data.children);
      });
  };

  const handleClick = () => {
    props.dismissAllPosts();
    props.removeSelectedPost();
  };

  const handleRefresh = () => {
    props.dismissAllPosts();
    props.removeSelectedPost();
    loadPosts();
  };

  const toggleSideBar = () => {
    const sidebar = document.getElementById('sideBar');
    sidebar.classList.toggle('visible');
  }

  const showSideBar = () => {
    const sidebar = document.getElementById('sideBar');
    if (!sidebar.classList.contains('visible')) sidebar.classList.toggle('visible');
  };

  const hideSideBar = () => {
    const sidebar = document.getElementById('sideBar');
    if (sidebar.classList.contains('visible')) sidebar.classList.toggle('visible');
  };

  const handleToggle = () => {
    const btn = document.getElementById('btn');
    if (btn.src === menuIcon) {
      btn.src = leftIcon;
    } else {
      btn.src = menuIcon;
    }
    toggleSideBar();
  };

  const handleSwipe = () => {
    document.addEventListener('swiped-right', (event) => {
      showSideBar();
    });
    document.addEventListener('swiped-left', (event) => {
      hideSideBar();
    });
  };

  loadPosts();

  handleSwipe();

  return (
    <section id="sideBar" className="postsSidebar">
      <h2 className="postsSidebar__title">Reddit Posts</h2>
      <PostsList />
      <h3 className="postsSidebar__dismissAll" onClick={handleClick}>
        Dismiss All
      </h3>
      <img id='btn' className="postsDetail__icon" src={menuIcon} onClick={handleToggle} alt='' />
      <img className="postsDetail__icon--reload" src={reloadIcon} onClick={handleRefresh} alt='' />
    </section>
  );

};

const mapDispatchToProps = {
  dismissAllPosts, addPosts, removeSelectedPost,
};

export default connect(null, mapDispatchToProps)(PostsSidebar);
