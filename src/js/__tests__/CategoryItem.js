import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CategoryItem from '@/js/components/CategoryItem/index';

test('カテゴリーアイテムが正しく表示されるか', () => {
  const wrapper = shallow(<CategoryItem recipeCategoryData={{ categoryId: 10, categoryName: 'カテゴリー名' }} />);

  // カテゴリー名が正しい
  expect(wrapper.text()).toBe('カテゴリー名');

  // Linkのtoが正しい
  expect(wrapper.find('.recipe-list__link').props().to).toBe('/category/10');

  // スナップショット
  expect(toJson(wrapper)).toMatchSnapshot();
});
