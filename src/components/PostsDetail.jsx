import React from 'react';
import '../assets/styles/components/PostsDetail.scss';

const PostsDetail = () => (      
      <div className="postsDetail">
        <h1 className="postsDetail__author">Post Author</h1>
        <img className="postsDetail__img" src="http://b.thumbs.redditmedia.com/9N1f7UGKM5fPZydrsgbb4_SUyyLW7A27um1VOygY3LM.jpg" />
        <p className="postsDetail__description">Lorem ipsum dolor sit amet</p>
      </div>
);

export default PostsDetail;