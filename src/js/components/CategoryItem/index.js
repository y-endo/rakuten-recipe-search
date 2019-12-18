import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CategoryItem extends React.Component {
  render() {
    return (
      <li className="recipe-list__item">
        <Link to={`/category/${this.props.recipeCategoryData.categoryId}`} className="recipe-list__link">
          {this.props.recipeCategoryData.categoryName}
        </Link>
      </li>
    );
  }
}

CategoryItem.propTypes = {
  recipeCategoryData: PropTypes.object
};
