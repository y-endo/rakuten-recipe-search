import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Title from '@/js/components/Title/index';

test('タイトルのテキストが正しく表示されるか', () => {
  const wrapper = shallow(<Title title="タイトル" />);

  // Titleのテキストが「タイトル」になっているか
  expect(wrapper.text()).toBe('タイトル');
  expect(toJson(wrapper)).toMatchSnapshot();

  // propsのtitleを「テスト」に変更
  wrapper.setProps({ title: 'テスト' });

  // Titleのテキストが「テスト」になっているか
  expect(wrapper.text()).toBe('テスト');
  expect(toJson(wrapper)).toMatchSnapshot();
});
