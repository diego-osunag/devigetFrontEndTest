import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/PostDetail.scss';

const PostDetail = ({ selectedPost }) => {
  const [isActive, setActive] = useState();

  const validateThumbUrl = () => {
    switch (selectedPost.thumbnail) {
      case 'self':
        return '';
      case 'default':
        return '';
      default:
        return selectedPost.thumbnail;
    }
  };

  const validateFullImgUrl = () => (
    selectedPost.preview != null ? 
      selectedPost.preview.images[0].source.url.replace(/&amp;/g, '&')
      : ''
  );

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className='postDetail'>
      <h2 className='postDetail__author'>{ selectedPost.author }</h2>
      <img className='postDetail__img' src={validateThumbUrl()} onClick={handleToggle} alt='' />
      <h1 className='postDetail__title'>{ selectedPost.title }</h1>
      <p className='postDetail__description'>{ selectedPost.selftext }</p>
      <img
        className={isActive ? 'postDetail__fullImg active' : 'postDetail__fullImg'}
        src={validateFullImgUrl()}
        onClick={handleToggle}
        alt=''
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedPost: state.selectedPost,
  };
};

export default connect(mapStateToProps, null)(PostDetail);
