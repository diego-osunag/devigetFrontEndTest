import React from 'react';
import '../assets/styles/components/PostsListItem.scss';
import dotIcon from '../assets/static/circle.png';
import arrowIcon from '../assets/static/right-arrow-icon.png';
import dismissIcon from '../assets/static/dismiss-icon.png';

const PostsListItem = () => (
  <div className="postsListItem">
    <div className="postsListItem__row">
      <div className="postsListItem__author">
        <img className="postsListItem__author--indicator" src={ dotIcon } alt="Blue dot" />
        <h2 className="postsListItem__author--text">Post Author</h2>
      </div>      
      <p className="postsListItem__time">19 hours ago</p>
    </div>
    <div className="postsListItem__row">
      <img className="postsListItem__thumb" src="http://b.thumbs.redditmedia.com/9N1f7UGKM5fPZydrsgbb4_SUyyLW7A27um1VOygY3LM.jpg" />
      <p className="postsListItem__description">Post description</p>
      <img className="postsListItem__icon" src={ arrowIcon } alt="Right Arrow Icon" />
    </div>
    <div className="postsListItem__row">
      <div className="postsListItem__dismiss" >
        <img className="postsListItem__dismiss--icon" src={ dismissIcon } alt="Dismiss Icon" />
        <p className="postsListItem__dismiss--text">Dismiss Post</p>
      </div>
      <p className="postsListItem__comments">1448 comments</p>
    </div>
  </div>
);

export default PostsListItem;