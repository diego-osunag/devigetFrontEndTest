import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import PostDetail from '../../components/PostDetail';

describe('<PostDetail />', () => {
  const post = mount(
    <ProviderMock>
      <PostDetail />
    </ProviderMock>,
  );

  test('PostDetail component rendering', () => {
    expect(post.length).toEqual(1);
  });

  test('Author\'s name rendering', () => {
    expect(post.find('h2.postDetail__author').text()).toEqual('0-07i');
  });

  test('Thumbnail image rendering', () => {
    expect(post.find('img.postDetail__img').length).toEqual(1);
  });

  test('Post title rendering', () => {
    expect(post.find('h1.postDetail__title').text()).toEqual('How do I find external services in the code?');
  });
});

describe('<PostDetail /> Snapshot', () => {
  test('PostDetail UI rendering correctly', () => {
    const post = create(
      <ProviderMock>
        <PostDetail />
      </ProviderMock>,
    );
    expect(post.toJSON()).toMatchSnapshot();
  });
});
