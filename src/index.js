import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import AppRoutes from './routes';


import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers/indexReducer'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk,logger)
)

const client = new ApolloClient({
  uri: 'http://localhost/reactApp/firstReactApp/backend/test.php',
  cache: new InMemoryCache()
});

client.query({ query: gql`
  {
    user(id: 1) {
      id
      name
    }
  }
`}).then(result =>console.log(result));


render( 
    <Provider store={store}>
        <AppRoutes/>
   </Provider>,
    document.getElementById('root')
);
