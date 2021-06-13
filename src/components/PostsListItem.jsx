import React from 'react';
import { connect } from 'react-redux';
import { setSelectedPost, removeSelectedPost, dismissPost, setPostAsVisited, dismissAllPosts } from '../actions';
import '../assets/styles/components/PostsListItem.scss';
import dotIcon from '../assets/static/circle.png';
import arrowIcon from '../assets/static/right-arrow-icon.png';
import dismissIcon from '../assets/static/dismiss-icon.png';

const PostsListItem = (post) => {
  const handlePostClick = (itemId) => {
    if (!post.visited) post.setPostAsVisited(itemId);
    post.setSelectedPost(itemId);
  };

  const handleDismissPost = (itemId) => {
    post.removeSelectedPost();
    post.dismissPost(itemId);
  };

  const calcTimeStamp = () => {
    const today = new Date();
    const currentTime = Math.floor(today.getTime() / 1000);

    const timeDifference = currentTime - post.created_utc;
    let differenceConverted;
    let timeUnit = '';

    if (timeDifference > 3600) {
      differenceConverted = Math.floor(timeDifference / 3600);
      timeUnit = differenceConverted > 1 ? 'hours' : 'hour';

    } else if (timeDifference > 60) {
      differenceConverted = Math.floor(timeDifference / 60);
      timeUnit = differenceConverted > 1 ? 'minutes' : 'minute';

    } else {
      differenceConverted = timeDifference;
      timeUnit = differenceConverted > 1 ? 'seconds' : 'second';
    }

    return `${differenceConverted} ${timeUnit} ago`;
  };

  const validateThumbUrl = () => {
    switch (post.thumbnail) {
      case 'self':
        return '';
      case 'default':
        return '';
      default:
        return post.thumbnail;
    }
  };

  return (
    <div className='postsListItem'>
      <div className='postsListItem__row' onClick={() => handlePostClick(post.id)}>
        <div className='postsListItem__author'>
          <img
            className={post.visited ? 'postsListItem__author--indicator visited' : 'postsListItem__author--indicator'}
            src={dotIcon}
            alt='Blue dot'
          />
          <h2
            className={post.visited ? 'postsListItem__author--text visited' : 'postsListItem__author--text' }
          >
            {post.author}
          </h2>
        </div>
        <p className='postsListItem__time'>{ calcTimeStamp() }</p>
      </div>
      <div className='postsListItem__row' onClick={() => handlePostClick(post.id)}>
        <img
          className={post.visited ? 'postsListItem__thumb visited' : 'postsListItem__thumb'}
          src={validateThumbUrl()}
          alt=''
        />
        <p className={ post.visited ? 'postsListItem__description visited' : 'postsListItem__description' }>
          { post.title }
        </p>
        <img className='postsListItem__icon' src={ arrowIcon } alt='Right Arrow Icon' />
      </div>
      <div className='postsListItem__row'>
        <div className='postsListItem__dismiss'  onClick={() => handleDismissPost(post.id)}>
          <img className='postsListItem__dismiss--icon' src={ dismissIcon } alt='Dismiss Icon' />
          <p className='postsListItem__dismiss--text'>Dismiss Post</p>
        </div>
        <p className='postsListItem__comments' onClick={() => handlePostClick(post.id)}>{`${post.num_comments} comments`}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setSelectedPost, removeSelectedPost, dismissPost, setPostAsVisited, dismissAllPosts,
};

export default connect(null, mapDispatchToProps)(PostsListItem);