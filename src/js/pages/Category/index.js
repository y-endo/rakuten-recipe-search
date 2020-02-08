import React from 'react';
import PropTypes from 'prop-types';
import key from '@/js/constants/key';

import Title from '@/js/components/Title/index';
import RankingArticle from '@/js/components/RankingArticle/index';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeRankingList: []
    };
    console.log(this.props);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch(
      `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=${key}&format=json&formatVersion=2&categoryId=${this.props.match.params.id}`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ recipeRankingList: json.result });
      });
  }

  render() {
    const rankingArticles = this.state.recipeRankingList.map((data, index) => {
      return <RankingArticle key={index} recipeData={data} />;
    });

    const categoryName = this.props.recipeCategoryNames[this.props.match.params.id];

    return (
      <section className="content">
        <div className="content__inner">
          {categoryName && <Title title={`${categoryName}の人気レシピ TOP4`} />}
          {rankingArticles}
        </div>
      </section>
    );
  }
}

Category.propTypes = {
  match: PropTypes.object,
  recipeCategoryNames: PropTypes.object
};
