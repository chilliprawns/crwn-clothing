import React from 'react';
import { Route } from 'react-router-dom';

//import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
//import SHOP_DATA from './shop.data.js';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);


export default ShopPage;