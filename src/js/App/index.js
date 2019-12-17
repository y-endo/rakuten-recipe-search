import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Top from '@/js/pages/Top/index';
import Category from '@/js/pages/Category/index';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeCategoryList: [],
      categoryNames: {}
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const recipeCategoryList = await fetch(
      'https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1040081562719060244&format=json&formatVersion=2&categoryType=large'
    )
      .then(response => response.json())
      .then(json => {
        return json.result.large;
      })
      .catch(() => []);

    const categoryNames = {};
    recipeCategoryList.forEach(data => {
      categoryNames[data.categoryId] = data.categoryName;
    });

    this.setState({ recipeCategoryList, categoryNames });

    console.log(this.state);
  }

  render() {
    return (
      <Router>
        <Route exact path="/" render={() => <Top recipeCategoryList={this.state.recipeCategoryList} />}></Route>
        <Route exact path="/category/:id" render={routeProps => <Category categoryNames={this.state.categoryNames} {...routeProps} />}></Route>
      </Router>
    );
  }
}
