import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CategoryList from '@/js/components/CategoryList/index';

test('カテゴリーリストが正しく表示されるか', () => {
  const testData = [
    {
      categoryId: 10,
      categoryName: 'カテゴリー1'
    },
    {
      categoryId: 20,
      categoryName: 'カテゴリー2'
    },
    {
      categoryId: 30,
      categoryName: 'カテゴリー3'
    },
    {
      categoryId: 40,
      categoryName: 'カテゴリー4'
    }
  ];
  const wrapper = shallow(<CategoryList recipeCategoryListData={testData} />);

  // カテゴリーアイテムの数が正しい
  expect(wrapper.find('CategoryItem')).toHaveLength(4);

  // スナップショット
  expect(toJson(wrapper)).toMatchSnapshot();
});
