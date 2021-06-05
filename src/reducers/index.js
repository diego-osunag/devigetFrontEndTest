const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_POST':
      return {
        ...state,
        selectedPost: [action.payload]
      }

    case 'REMOVE_SELECTED_POST':
      return {
        ...state,
        selectedPost: [{
          "author" : ""
        }]
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

      case 'ADD_POSTS':
        return {
          ...state,
          postsList: [...state.postsList, ...action.payload]
        };

      case 'TOGGLE_SIDEBAR':
        return {
          ...state,
          sidebar: [!action.payload]
        };
      
    default:
      return state;
  }
}

export default reducer;