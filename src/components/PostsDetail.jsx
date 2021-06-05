import React from 'react';
import { connect } from "react-redux";
import '../assets/styles/components/PostsDetail.scss';

const PostsDetail = ({ selectedPost }) => {
  
  const validateUrl = () => {
    let validUrl = selectedPost[0].thumbnail;

    if((validUrl === "self")||(validUrl === "default"))
      validUrl = "";
    
    return validUrl
  }

  const validUrl = validateUrl();

  return(
    <div className="postsDetail">
      
      <h1 className="postsDetail__author">{ selectedPost[0].author }</h1>
      <img 
        className="postsDetail__img" src={ validUrl } />
      <p className="postsDetail__description">{ selectedPost[0].title }</p>
      
    </div>
  );
}

const mapStateToProps = state => {
  return { 
    selectedPost: state.selectedPost 
  }
}

export default connect(mapStateToProps, null)(PostsDetail);