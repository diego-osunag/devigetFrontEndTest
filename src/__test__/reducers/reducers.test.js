import reducer from '../../reducers';
import stateMock from '../../__mocks__/stateMock';

describe('Reducers', () => {
  test('Initial State test', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('SET_SELECTED_POST', () => {
    const postsListMock = stateMock.postsList;
    const initialState = {
      postsList: postsListMock,
    };
    const payload = 'k498da';
    const action = {
      type: 'SET_SELECTED_POST',
      payload,
    };
    const selectedPostMock = stateMock.postsList.filter(post => post.id === payload )[0];    
    const expected = {
      selectedPost: selectedPostMock,
      postsList: postsListMock,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('REMOVE_SELECTED_POST', () => {
    const postsListMock = stateMock.postsList;
    const selectedPostMock = stateMock.selectedPost;
    const initialState = {
      selectedPost: selectedPostMock,
      postsList: postsListMock,
    };
    const action = {
      type: 'REMOVE_SELECTED_POST',
    };
    const expected = {
      selectedPost: {},
      postsList: postsListMock,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('SET_POST_AS_VISITED', () => {
    const postsListMock = stateMock.postsList;
    const initialState = {
      postsList: postsListMock,
    };
    const payload = 'k498da';
    const action = {
      type: 'SET_POST_AS_VISITED',
      payload,
    };
    const finalPostsList = stateMock.postsList.map(post => {
      if (post.id !== 'k498da') return post;
      return {
        ...post,
        visited: true,
      };
    });
    const expected = {
      postsList: finalPostsList,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('DISMISS_POST', () => {
    const postsListMock = stateMock.postsList;
    const initialState = {
      postsList: postsListMock,
    };
    const payload = 'k498da';
    const action = {
      type: 'DISMISS_POST',
      payload,
    };
    const finalPostsList = postsListMock.filter(items => items.id !== action.payload);
    const expected = {
      postsList: finalPostsList,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('DISMISS_ALL_POSTS', () => {
    const postsListMock = stateMock.postsList;
    const initialState = {
      postsList: postsListMock,
    };
    const action = {
      type: 'DISMISS_ALL_POSTS',
    };
    const expected = {
      postsList: [],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('LOAD_POSTS', () => {
    const postsListMock = stateMock.postsList;
    const initialState = {
      postsList: [],
    };
    const payload = postsListMock;
    const action = {
      type: 'LOAD_POSTS',
      payload,
    };
    const expected = {
      postsList: postsListMock,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('UPDATE_PAGECOUNT', () => {
    const initialState = {
      pageCount: 0,
    };
    const payload = 5;
    const action = {
      type: 'UPDATE_PAGECOUNT',
      payload,
    };
    const expected = {
      pageCount: payload,
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
