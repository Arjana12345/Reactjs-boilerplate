import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import AppRoutes from './routes';


import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers/indexReducer'


import config from '../src/config';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk,logger)
)

const client = new ApolloClient({
  uri: config.API.getApolloBooks,
  cache: new InMemoryCache()
});

client.query({ query: gql`
{
  books {
    title
    author
  }
}
`}).then(result =>console.log(result));


render( 
    <Provider store={store}>
        <AppRoutes/>
   </Provider>,
    document.getElementById('root')
);
