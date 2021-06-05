import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/PostsDetail.scss';

const PostsDetail = ({ selectedPost }) => {

  const [isActive, setActive] = useState();

  const validateThumbUrl = () => {
    let thumbUrl = '';

    if (selectedPost[0] != null) {
      thumbUrl = selectedPost[0].thumbnail;
      if ((thumbUrl === 'self') || (thumbUrl === 'default')) thumbUrl = '';
    }

    return thumbUrl;
  };

  const validateFullImgUrl = () => {
    let imageUrl = '';

    if (selectedPost[0] != null) {
      if (selectedPost[0].preview != null) {
        imageUrl = selectedPost[0].preview.images[0].source.url;
        imageUrl = imageUrl.replaceAll('&amp;', '&');
      }
    }

    return imageUrl;
  };

  const handleToggle = () => {
    console.log(isActive);
    setActive(!isActive);
  };

  const thumbUrl = validateThumbUrl();
  const fullImgUrl = validateFullImgUrl();

  if (selectedPost[0] == null) {
    console.log('selectedPost is empty!');
    return <p>&nbsp;</p>;
  }

  return (
    <div className='postsDetail'>
      <h2 className='postsDetail__author'>{ selectedPost[0].author }</h2>
      <img className='postsDetail__img' src={thumbUrl} onClick={handleToggle} alt='' />
      <h1 className='postsDetail__title'>{ selectedPost[0].title }</h1>
      <p className='postsDetail__description'>{ selectedPost[0].selftext }</p>
      <img
        className={isActive ? 'postsDetail__fullImg active' : 'postsDetail__fullImg'}
        src={fullImgUrl}
        onClick={handleToggle}
        alt=''
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedPost: state.selectedPost
  };
};

export default connect(mapStateToProps, null)(PostsDetail);