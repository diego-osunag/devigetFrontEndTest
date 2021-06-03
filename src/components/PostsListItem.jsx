import React from 'react';
import '../assets/styles/components/PostsListItem.scss';
import dotIcon from '../assets/static/circle.png';
import arrowIcon from '../assets/static/right-arrow-icon.png';
import dismissIcon from '../assets/static/dismiss-icon.png';

const PostsListItem = ({ visited, author, created, thumbnail, title, num_comments }) => {
  const today = new Date();
  const currentTime = today.getTime();
  const postCreated = created * 1000;
  const diff = Math.floor((currentTime - postCreated)/ 3600000);

  return(
    <div className="postsListItem">
      <div className="postsListItem__row">
        <div className="postsListItem__author">
          <img className={visited ? "postsListItem__author--indicator visited" : "postsListItem__author--indicator"} src={ dotIcon } alt="Blue dot" />
          <h2 className="postsListItem__author--text">{ author }</h2>
        </div>      
        <p className="postsListItem__time">{`${diff} years ago`}</p>
      </div>
      <div className="postsListItem__row">
        <img className="postsListItem__thumb" src={ thumbnail } />
        <p className="postsListItem__description">{ title }</p>
        <img className="postsListItem__icon" src={ arrowIcon } alt="Right Arrow Icon" />
      </div>
      <div className="postsListItem__row">
        <div className="postsListItem__dismiss" >
          <img className="postsListItem__dismiss--icon" src={ dismissIcon } alt="Dismiss Icon" />
          <p className="postsListItem__dismiss--text">Dismiss Post</p>
        </div>
        <p className="postsListItem__comments">{`${num_comments} comments`}</p>
      </div>
    </div>
  );
}

export default PostsListItem;