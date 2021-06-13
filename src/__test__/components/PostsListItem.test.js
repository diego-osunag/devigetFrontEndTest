import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import PostsListItemMock from '../../__mocks__/PostsListItemMock';
import PostsListItem from '../../components/PostsListItem';

describe('<PostsListItem />', () => {
  const post = mount(
    <ProviderMock>
      <PostsListItem
        id={PostsListItemMock.id}
        author={PostsListItemMock.author}
        created_utc={PostsListItemMock.created_utc}
        thumbnail={PostsListItemMock.thumbnail}
        title={PostsListItemMock.title}
        num_comments={PostsListItemMock.num_comments}
      />
    </ProviderMock>,
  );

  test('PostsListItem component rendering', () => {
    expect(post.length).toEqual(1);
  });

  test('Read/Unread indicator rendering', () => {
    expect(post.find('img.postsListItem__author--indicator').length).toEqual(1);
  });

  test('Author\'s name rendering', () => {
    expect(post.find('h2.postsListItem__author--text').text()).toEqual('chrono_trigger416');
  });

  test('Timestamp label rendering (X hours ago)', () => {
    expect(post.find('.postsListItem__time').length).toEqual(1);
  });

  test('Timestamp label rendering (X hour ago)', () => {
    const oneHourAgo = () => {
      const today = new Date();
      const currentTime = Math.floor(today.getTime() / 1000);
      return (currentTime - 3600);
    };
    const post1 = mount(
      <ProviderMock>
        <PostsListItem
          created_utc={oneHourAgo}
        />
      </ProviderMock>,
    );
    expect(post1.find('.postsListItem__time').length).toEqual(1);
  });

  test('Timestamp label rendering (X minutes ago)', () => {
    const thirtyMinutesAgo = () => {
      const today = new Date();
      const currentTime = Math.floor(today.getTime() / 1000);
      return (currentTime - 1800);
    };
    const post2 = mount(
      <ProviderMock>
        <PostsListItem
          created_utc={thirtyMinutesAgo}
        />
      </ProviderMock>,
    );
    expect(post2.find('.postsListItem__time').length).toEqual(1);
  });

  test('Timestamp label rendering (X minute ago)', () => {
    const oneMinuteAgo = () => {
      const today = new Date();
      const currentTime = Math.floor(today.getTime() / 1000);
      return (currentTime - 60);
    };
    const post3 = mount(
      <ProviderMock>
        <PostsListItem
          created_utc={oneMinuteAgo}
        />
      </ProviderMock>,
    );
    expect(post3.find('.postsListItem__time').length).toEqual(1);
  });

  test('Timestamp label rendering (X seconds ago)', () => {
    const tenSecondsAgo = () => {
      const today = new Date();
      const currentTime = Math.floor(today.getTime() / 1000);
      return (currentTime - 10);
    };
    const post4 = mount(
      <ProviderMock>
        <PostsListItem
          created_utc={tenSecondsAgo}
        />
      </ProviderMock>,
    );
    expect(post4.find('.postsListItem__time').length).toEqual(1);
  });

  test('Timestamp label rendering (X second ago)', () => {
    const oneSecondAgo = () => {
      const today = new Date();
      const currentTime = Math.floor(today.getTime() / 1000);
      return (currentTime - 1);
    };
    const post5 = mount(
      <ProviderMock>
        <PostsListItem
          created_utc={oneSecondAgo}
        />
      </ProviderMock>,
    );
    expect(post5.find('.postsListItem__time').length).toEqual(1);
  });

  test('Thumbnail image rendering', () => {
    expect(post.find('.postsListItem__thumb').length).toEqual(1);
  });

  test('Post title rendering', () => {
    expect(post.find('.postsListItem__description').text()).toEqual('Lorem ipsum dolor sit amet andenum canus lupus familiaris est ergo.');
  });

  test('Right arrow image rendering', () => {
    expect(post.find('.postsListItem__icon').length).toEqual(1);
  });

  test('Dismiss button rendering', () => {
    expect(post.find('.postsListItem__dismiss').length).toEqual(1);
  });

  test('Post number of comments rendering', () => {
    expect(post.find('.postsListItem__comments').text()).toEqual('99 comments');
  });
});

describe('<PostsListItem /> Snapshot', () => {
  test('PostsListItem UI rendering correctly', () => {
    const post = create(
      <ProviderMock>
        <PostsListItem />
      </ProviderMock>,
    );
    expect(post.toJSON()).toMatchSnapshot();
  });
});
