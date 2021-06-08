import React from 'react';
import PostsDetail from '../components/PostsDetail';
import PostsSidebar from '../components/PostsSidebar';
import '../assets/styles/App.scss';

const App = () => {
  return (
    <div className='App'>
      <PostsSidebar />
      <PostsDetail />
    </div>
  );
};

export default App;
