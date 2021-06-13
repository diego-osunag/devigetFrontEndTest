const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_POST':
      return {
        ...state,
        selectedPost: state.postsList.filter(post => post.id === action.payload)[0],
      };

    case 'REMOVE_SELECTED_POST':
      return {
        ...state,
        selectedPost: {},
      };

    case 'SET_POST_AS_VISITED':
      return {
        ...state,
        postsList: state.postsList.map(post => {
          if (post.id !== action.payload) return post;
          return {
            ...post,
            visited: true,
          };
        }),
      };

    case 'DISMISS_POST':
      return {
        ...state,
        postsList: state.postsList.filter(items => items.id !== action.payload),
      };

    case 'DISMISS_ALL_POSTS':
      return {
        ...state,
        postsList: [],
      };

    case 'LOAD_POSTS':
      return {
        ...state,
        postsList: [...action.payload],
      };

    case 'UPDATE_PAGECOUNT':
      return {
        ...state,
        pageCount: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
