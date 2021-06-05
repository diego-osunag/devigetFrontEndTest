export const setSelectedPost = payload => ({
  type: 'SET_SELECTED_POST',
  payload,
});

export const removeSelectedPost = payload => ({
  type: 'REMOVE_SELECTED_POST',
  payload,
});

export const setPostAsVisited = payload => ({
  type: 'SET_POST_AS_VISITED',
  payload,
});

export const dismissPost = payload => ({
  type: 'DISMISS_POST',
  payload,
});

export const dismissAllPosts = payload => ({
  type: 'DISMISS_ALL_POSTS',
  payload,
});

export const addPosts = payload => ({
  type: 'ADD_POSTS',
  payload,
});

export const toggleSidebar = payload => ({
  type: 'TOGGLE_SIDEBAR',
  payload,
});