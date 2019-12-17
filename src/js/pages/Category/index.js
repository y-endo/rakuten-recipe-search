import React from 'react';

import Title from '@/js/components/Title/index';

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
      `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1040081562719060244&format=json&formatVersion=2&categoryId=${this.props.match.params.id}`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ recipeRankingList: json.result });
      });
  }

  render() {
    const rankingArticles = this.state.recipeRankingList.map((data, index) => {
      return (
        <article key={index} className="ranking-article">
          <div className="ranking-article__image-container">
            <img src={data.mediumImageUrl} alt="" className="ranking-article__image" />
          </div>
          <div className="ranking-article__detail">
            <h3 className="ranking-article__title">{data.recipeTitle}</h3>
            <p className="ranking-article__description">{data.recipeDescription}</p>
            <div className="ranking-article__material">
              <p>材料</p>
              <ul className="ranking-article__material-list">
                {data.recipeMaterial.map((material, index) => {
                  return (
                    <li key={index} className="ranking-article__material-list-item">
                      {material}
                    </li>
                  );
                })}
              </ul>
            </div>
            <a href={data.recipeUrl} target="_blank" className="ranking-article__link">
              詳しく見る
            </a>
          </div>
        </article>
      );
    });

    const categoryName = this.props.categoryNames[this.props.match.params.id];

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
