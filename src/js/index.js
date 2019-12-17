import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Top from './pages/Top';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Top}></Route>
  </Router>,
  document.querySelector('#app')
);

// const recipeCategoryListAPI =
//   'https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1040081562719060244&format=json&formatVersion=2';
// const recipeCategoryRankingAPI =
//   'https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=1040081562719060244&format=json&formatVersion=2&categoryId=30';

// fetch(recipeCategoryListAPI)
//   .then(response => {
//     return response.json();
//   })
//   .then(json => {
//     console.log(json);
//   });

// fetch(recipeCategoryRankingAPI)
//   .then(response => {
//     return response.json();
//   })
//   .then(json => {
//     console.log(json);
//   });
