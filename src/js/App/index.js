import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import key from '@/js/constants/key';

import Top from '@/js/pages/Top/index';
import Category from '@/js/pages/Category/index';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeCategoryListData: [],
      recipeCategoryNames: {}
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const recipeCategoryListData = await fetch(
      `https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=${key}&format=json&formatVersion=2&categoryType=large`
    )
      .then(response => response.json())
      .then(json => {
        return json.result.large;
      })
      .catch(() => []);

    const recipeCategoryNames = {};
    recipeCategoryListData.forEach(data => {
      recipeCategoryNames[data.categoryId] = data.categoryName;
    });

    this.setState({ recipeCategoryListData, recipeCategoryNames });

    console.log(this.state);
  }

  render() {
    return (
      <Router>
        <Route exact path="/" render={() => <Top recipeCategoryListData={this.state.recipeCategoryListData} />}></Route>
        <Route
          exact
          path="/category/:id"
          render={routeProps => <Category recipeCategoryNames={this.state.recipeCategoryNames} {...routeProps} />}
        ></Route>
      </Router>
    );
  }
}
