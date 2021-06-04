const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_POST':
      return {
        ...state,
        selectedPost: [action.payload]
      }

    case 'SET_POST_AS_VISITED':
      let stringifiedPostsList = JSON.stringify(state.postsList)
      let copyOfPostsList = JSON.parse(stringifiedPostsList)
      let postToBeModified = copyOfPostsList.find(items => items.data.id === action.payload)
      postToBeModified.data.visited = true
      return {...state, postsList: copyOfPostsList}

    case 'DISMISS_POST':
      return {
        ...state,
        postsList: state.postsList.filter(items => items.data.id !== action.payload)
      };
      
    case 'DISMISS_ALL_POSTS':
      return {
        ...state,
        postsList: []
      };
      
    default:
      return state;
  }
}

export default reducer;