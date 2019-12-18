import React from 'react';
import PropTypes from 'prop-types';

import Title from '@/js/components/Title/index';
import CategoryList from '@/js/components/CategoryList/index';

export default class Top extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="content">
        <div className="content__inner">
          <Title title="トップページ" />
          <CategoryList recipeCategoryListData={this.props.recipeCategoryListData} />
        </div>
      </section>
    );
  }
}

Top.propTypes = {
  recipeCategoryListData: PropTypes.array
};
