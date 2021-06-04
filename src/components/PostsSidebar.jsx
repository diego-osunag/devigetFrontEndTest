import React from 'react';
import { connect } from 'react-redux';
import { dismissAllPosts } from '../actions';
import PostsList from './PostsList';
import '../assets/styles/components/PostsSidebar.scss';
import menuIcon from '../assets/static/hamburguer-menu-icon.png';

const PostsSidebar = (props) => {

  const handleDismissAllPosts = () => {
    props.dismissAllPosts()
  }

  return(
    <section className="postsSidebar active">
      <h2 className="postsSidebar__title">Reddit Posts</h2>
      <PostsList/>
      <h3 className="postsSidebar__dismissAll" onClick={ handleDismissAllPosts }>
        Dismiss All
      </h3>
      <img className="postsDetail__icon" src={ menuIcon } />
    </section>
  );
 
};

const mapDispatchToProps =  {
  dismissAllPosts,
}

export default connect(null, mapDispatchToProps)(PostsSidebar);