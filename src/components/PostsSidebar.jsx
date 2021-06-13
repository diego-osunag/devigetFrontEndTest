/* eslint-disable jsx-quotes */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dismissAllPosts, loadPosts, removeSelectedPost, updatePageCount } from '../actions';
import PostsList from './PostsList';
import '../assets/styles/components/PostsSidebar.scss';
import menuIcon from '../assets/static/hamburguer-menu-icon.png';
import reloadIcon from '../assets/static/reload.png';
import '../swiped-events.min';

class PostsSidebar extends Component {

  fetchApiData() {
    const API = 'https://www.reddit.com/r/reactjs/top.json';
    fetch(API)
      .then((response) => response.json())
      .then((responseData) => {
        const posts = responseData.data.children.map(item => (item.data));
        this.props.loadPosts(posts);
        this.props.updatePageCount(Math.ceil(this.props.postsList.length / this.props.perPage));
      });
  }

  handleClick = () => {
    this.props.dismissAllPosts();
    this.props.removeSelectedPost();
    this.props.updatePageCount(0);
  }

  handleRefresh = () => {
    this.props.dismissAllPosts();
    this.props.removeSelectedPost();
    this.fetchApiData();    
  }

  toggleSideBar = () => {
    const sidebar = document.getElementById('sideBar');
    sidebar.classList.toggle('visible');
  }

  showSideBar = () => {
    const sidebar = document.getElementById('sideBar');
    if (!sidebar.classList.contains('visible')) sidebar.classList.toggle('visible');
  }

  hideSideBar = () => {
    const sidebar = document.getElementById('sideBar');
    if (sidebar.classList.contains('visible')) sidebar.classList.toggle('visible');
  }

  handleToggle = () => {
    const sidebar = document.getElementById('sideBar');
    sidebar.classList.toggle('visible');
  }

  handleSwipe() {
    document.addEventListener('swiped-right', (event) => {
      this.showSideBar();
    });
    document.addEventListener('swiped-left', (event) => {
      this.hideSideBar();
    });
  }  

  componentDidMount() {
    this.fetchApiData();
    this.handleSwipe();
  }

  render() {
    return (
      <section id="sideBar" className="postsSidebar">
        <h2 className="postsSidebar__title">Top Reddit Posts (/r/reactjs)</h2>
        <PostsList />
        <h3 className="postsSidebar__dismissAll" onClick={this.handleClick}>
          Dismiss All
        </h3>
        <img id='btn' className="postsDetail__icon" src={menuIcon} onClick={this.handleToggle} alt='' />
        <img className="postsDetail__icon--reload" src={reloadIcon} onClick={this.handleRefresh} alt='' />
      </section>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    postsList: state.postsList,
    pageCount: state.pageCount,
    perPage: state.perPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dismissAllPosts: () => dispatch(dismissAllPosts()),
    loadPosts: (posts) => dispatch(loadPosts(posts)),
    removeSelectedPost: () => dispatch(removeSelectedPost()),
    updatePageCount: (number) => dispatch(updatePageCount(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsSidebar);
