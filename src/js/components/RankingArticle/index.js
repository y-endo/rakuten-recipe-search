import React from 'react';
import PropTypes from 'prop-types';

export default class RankingArticle extends React.Component {
  render() {
    const materialItems = this.props.recipeData.recipeMaterial.map((material, index) => {
      return (
        <li key={index} className="ranking-article__material-list-item">
          {material}
        </li>
      );
    });

    return (
      <article className="ranking-article">
        <div className="ranking-article__image-container">
          <img src={this.props.recipeData.mediumImageUrl} alt="" className="ranking-article__image" />
        </div>
        <div className="ranking-article__detail">
          <h3 className="ranking-article__title">{this.props.recipeData.recipeTitle}</h3>
          <p>{this.props.recipeData.recipeDescription}</p>
          <p>調理時間: {this.props.recipeData.recipeIndication}</p>
          <p>コスト: {this.props.recipeData.recipeCost}</p>
          <div className="ranking-article__material">
            <p>材料:</p>
            <ul className="ranking-article__material-list">{materialItems}</ul>
          </div>
          <a href={this.props.recipeData.recipeUrl} target="_blank" rel="noopener noreferrer" className="ranking-article__link">
            詳しく見る
          </a>
        </div>
      </article>
    );
  }
}

RankingArticle.propTypes = {
  match: PropTypes.object,
  recipeData: PropTypes.object
};
