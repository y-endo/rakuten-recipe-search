import React from 'react';

export default class Top extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {
        large: [],
        medium: [],
        small: []
      }
    };
    this.getData();
  }

  getData() {
    const recipeCategoryListAPI =
      'https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1040081562719060244&format=json&formatVersion=2';

    fetch(recipeCategoryListAPI)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({ data: json.result });
      });
  }

  render() {
    const list = [];

    this.state.data.large.forEach((largeData, index) => {
      list.push(<li key={index}>{largeData.categoryName}</li>);
    });

    return (
      <>
        <h1>Top</h1>
        <ul>{list}</ul>
      </>
    );
  }
}
