import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import PostsSidebar from '../../components/PostsSidebar';

describe('<PostsSidebar />', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  const post = mount(
    <ProviderMock>
      <PostsSidebar />
    </ProviderMock>,
  );

  test('PostsSidebar component rendering', () => {
    expect(post.length).toEqual(1);
  });

  test('Title rendering', () => {
    expect(post.find('h2.postsSidebar__title').text()).toEqual('Top Reddit Posts (/r/reactjs)');
  });

  test('Dismiss All button rendering', () => {
    expect(post.find('h3.postsSidebar__dismissAll').text()).toEqual('Dismiss All');
  });

  test('Menu icon rendering', () => {
    expect(post.find('img.postsDetail__icon').length).toEqual(1);
  });

  test('Reload icon rendering', () => {
    expect(post.find('img.postsDetail__icon--reload').length).toEqual(1);
  });

});

describe('<PostsSidebar /> Snapshot', () => {
  test('PostsSidebar UI rendering correctly', () => {
    const post = create(
      <ProviderMock>
        <PostsSidebar />
      </ProviderMock>,
    );
    expect(post.toJSON()).toMatchSnapshot();
  });
});