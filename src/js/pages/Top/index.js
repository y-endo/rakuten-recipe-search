import React from 'react';
import { Link } from 'react-router-dom';

import Title from '@/js/components/Title/index';

export default class Top extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categoryListItems = this.props.recipeCategoryList.map((data, index) => {
      return (
        <li key={index} className="recipe-list__item">
          <Link to={`/category/${data.categoryId}`} className="recipe-list__link">
            {data.categoryName}
          </Link>
        </li>
      );
    });

    return (
      <section className="content">
        <div className="content__inner">
          <Title title="トップページ" />
          <ul className="recipe-list">{categoryListItems}</ul>
        </div>
      </section>
    );
  }
}
