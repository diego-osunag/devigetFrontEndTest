import React from 'react';
import { connect } from "react-redux";
import PostsListItem from './PostsListItem';
import '../assets/styles/components/PostsList.scss'

const PostsList = ({ postsList }) => {
  return(
    <section className="postsList">
      <div className="postsList__container">
      { postsList.map( post => 
        <PostsListItem key={ post.data.id } {...post.data} />
      )}
      </div>
    </section>
  );
}

const mapStateToProps = state => {
  return { 
    postsList: state.postsList 
  };
};

export default connect(mapStateToProps, null)(PostsList);