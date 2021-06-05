import React from 'react';
import { connect } from "react-redux";
import PostsListItem from './PostsListItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../assets/styles/components/PostsList.scss'

const PostsList = ({ postsList }) => {
  return(
    <section className="postsList">
      <TransitionGroup component="div" className="postsList__container">
        { postsList.map( post =>
          <CSSTransition key={ post.data.id } timeout={700} classNames="item"> 
            <PostsListItem key={ post.data.id } {...post.data} />
          </CSSTransition>
        )}
        </TransitionGroup>
    </section>
  );
}

const mapStateToProps = state => {
  return { 
    postsList: state.postsList 
  };
};

export default connect(mapStateToProps, null)(PostsList);