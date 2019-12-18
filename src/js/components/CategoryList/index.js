import React from 'react';
import PropTypes from 'prop-types';

import CategoryItem from '@/js/components/CategoryItem/index';

export default class CategoryList extends React.Component {
  render() {
    const listItems = this.props.recipeCategoryListData.map((data, index) => {
      return <CategoryItem key={index} recipeCategoryData={data} />;
    });

    return <ul className="recipe-list">{listItems}</ul>;
  }
}

CategoryList.propTypes = {
  recipeCategoryListData: PropTypes.array
};
