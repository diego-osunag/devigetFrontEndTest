import { useState, useEffect } from 'react';

const useFetchAPI = (API) => {
  const [posts, setPosts] = useState({ children: [] });

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);
  return posts;
};

export default useFetchAPI;
