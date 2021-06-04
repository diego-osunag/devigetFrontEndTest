import React from 'react';
import { connect } from "react-redux";
import '../assets/styles/components/PostsDetail.scss';

const PostsDetail = ({ selectedPost }) => (      
      <div className="postsDetail">
        
        <h1 className="postsDetail__author">{ selectedPost[0].author }</h1>
        <img className="postsDetail__img" src={ selectedPost[0].thumbnail } />
        <p className="postsDetail__description">{ selectedPost[0].title }</p>
        
      </div>
);

const mapStateToProps = state => {
  return { 
    selectedPost: state.selectedPost 
  }
}

export default connect(mapStateToProps, null)(PostsDetail);