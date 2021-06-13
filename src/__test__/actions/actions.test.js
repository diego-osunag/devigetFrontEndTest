import { setSelectedPost, getPost, removeSelectedPost, setPostAsVisited, dismissPost, dismissAllPosts, loadPosts, toggleSidebar, updatePageCount } from '../../actions';
import stateMock from '../../__mocks__/stateMock';

describe('Actions', () => {
  test('setSelectedPost', () => {
    //console.log(actions);
    const payload = stateMock.selectedPostMock;
    const expected = {
      type: 'SET_SELECTED_POST',
      payload,
    };
    expect(setSelectedPost(payload)).toEqual(expected);
  });

  test('getPost', () => {
    const payload = stateMock.selectedPostMock;
    const expected = {
      type: 'GET_POST',
      payload,
    };
    expect(getPost(payload)).toEqual(expected);
  });

  test('removeSelectedPost', () => {
    const expected = {
      type: 'REMOVE_SELECTED_POST',
    };
    expect(removeSelectedPost()).toEqual(expected);
  });

  test('setPostAsVisited', () => {
    const payload = 'nv9mwb';
    const expected = {
      type: 'SET_POST_AS_VISITED',
      payload,
    };
    expect(setPostAsVisited(payload)).toEqual(expected);
  });

  test('dismissPost', () => {
    const payload = 'nv9mwb';
    const expected = {
      type: 'DISMISS_POST',
      payload,
    };
    expect(dismissPost(payload)).toEqual(expected);
  });

  test('dismissAllPosts', () => {
    const expected = {
      type: 'DISMISS_ALL_POSTS',
    };
    expect(dismissAllPosts()).toEqual(expected);
  });

  test('loadPosts', () => {
    const payload = stateMock.postsListMock;
    const expected = {
      type: 'LOAD_POSTS',
      payload,
    };
    expect(loadPosts(payload)).toEqual(expected);
  });

  test('updatePageCount', () => {
    const payload = 5;
    const expected = {
      type: 'UPDATE_PAGECOUNT',
      payload,
    };
    expect(updatePageCount(payload)).toEqual(expected);
  });

});
