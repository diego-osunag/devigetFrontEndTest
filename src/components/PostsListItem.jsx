import React from 'react';
import { connect } from 'react-redux';
import { setSelectedPost, removeSelectedPost, dismissPost, setPostAsVisited, dismissAllPosts } from '../actions';
import '../assets/styles/components/PostsListItem.scss';
import dotIcon from '../assets/static/circle.png';
import arrowIcon from '../assets/static/right-arrow-icon.png';
import dismissIcon from '../assets/static/dismiss-icon.png';

const PostsListItem = (props) => {
  //console.log("PostsListItem");
  //console.log(props);
  const { id, visited, author, created_utc, thumbnail, title, num_comments, selftext, preview } = props;

  const handlePostClick = (itemId) => {
    if (!visited) props.setPostAsVisited(itemId);
    //debugger;
    props.setSelectedPost(itemId);
  };

  const handleDismissPost = (itemId) => {
    props.removeSelectedPost();
    props.dismissPost(itemId);
  };

  const calcTimeStamp = () => {
    const today = new Date();
    const currentTime = Math.floor(today.getTime() / 1000);
    const postTimestamp = created_utc;

    const timeDifference = currentTime - postTimestamp;
    let timeDiffFormat;
    let timeUnit = '';

    if (timeDifference > 3600) {
      timeDiffFormat = Math.floor(timeDifference / 3600);
      timeUnit = timeDiffFormat > 1 ? 'hours' : 'hour';

    } else if (timeDifference > 60) {
      timeDiffFormat = Math.floor(timeDifference / 60);
      timeUnit = timeDiffFormat > 1 ? 'minutes' : 'minute';

    } else {
      timeDiffFormat = timeDifference;
      timeUnit = timeDiffFormat > 1 ? 'seconds' : 'second';
    }

    const message = `${timeDiffFormat} ${timeUnit} ago`;

    return message;
  };

  const validateUrl = () => {
    const validUrl = thumbnail.includes('http') ? thumbnail : '';
    return validUrl;
  };

  const timeStamp = calcTimeStamp();
  const validUrl = validateUrl();

  return (
    <div className='postsListItem'>
      <div className='postsListItem__row' onClick={() => handlePostClick(id)}>
        <div className='postsListItem__author'>
          <img
            className={visited ? 'postsListItem__author--indicator visited' : 'postsListItem__author--indicator'}
            src={dotIcon}
            alt='Blue dot'
          />
          <h2
            className={visited ? 'postsListItem__author--text visited' : 'postsListItem__author--text' }
          >
            { author }
          </h2>
        </div>
        <p className='postsListItem__time'>{ timeStamp }</p>
      </div>
      <div className='postsListItem__row' onClick={() => handlePostClick(id)}>
        <img className='postsListItem__thumb' src={validUrl} alt='' />
        <p className={ visited ? 'postsListItem__description visited' : 'postsListItem__description' }>
          { title }
        </p>
        <img className='postsListItem__icon' src={ arrowIcon } alt='Right Arrow Icon' />
      </div>
      <div className='postsListItem__row'>
        <div className='postsListItem__dismiss'  onClick={() => handleDismissPost(id)}>
          <img className='postsListItem__dismiss--icon' src={ dismissIcon } alt='Dismiss Icon' />
          <p className='postsListItem__dismiss--text'>Dismiss Post</p>
        </div>
        <p className='postsListItem__comments' onClick={() => handlePostClick(id)}>{`${num_comments} comments`}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setSelectedPost, removeSelectedPost, dismissPost, setPostAsVisited, dismissAllPosts,
};

export default connect(null, mapDispatchToProps)(PostsListItem);