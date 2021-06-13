import React from 'react';
import PostDetail from '../components/PostDetail';
import PostsSidebar from '../components/PostsSidebar';
import '../assets/styles/App.scss';

const App = () => {
  return (
    <div className='App'>
      <PostsSidebar />
      <PostDetail />
    </div>
  );
};

export default App;
