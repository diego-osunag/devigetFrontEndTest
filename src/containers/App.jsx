import React from 'react';
import PostsDetail from '../components/PostsDetail';
import PostsSidebar from '../components/PostsSidebar';
import PostsList from '../components/PostsList';
import PostsListItem from '../components/PostsListItem';
import useTestAPI from '../hooks/useTestAPI';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/data';

const App = () => {
  const testAPI = useTestAPI(API);

  return (
    <div className="App">
      <PostsSidebar>
        <PostsList>
          { testAPI.children.map( item => 
            <PostsListItem key={ item.data.id } {...item.data} />
          )}
        </PostsList>
      </PostsSidebar>
      <PostsDetail />
    </div>
  );
}

export default App;