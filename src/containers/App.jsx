import React from 'react';
import PostsDetail from '../components/PostsDetail';
import PostsDrawer from '../components/PostsDrawer';
import PostsList from '../components/PostsList';
import PostsListItem from '../components/PostsListItem';
import '../assets/styles/App.scss';

const App = () => {

  return (
    <div className="App">
      <PostsDrawer>
        <PostsList>
          <PostsListItem />
          <PostsListItem />
          <PostsListItem />
          <PostsListItem />
          <PostsListItem />
          <PostsListItem />
        </PostsList>
      </PostsDrawer>
      <PostsDetail />
    </div>
  );
}

export default App;