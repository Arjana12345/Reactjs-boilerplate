import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import AppRoutes from './routes';


import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers/indexReducer'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk,logger)
)


render( 
    <Provider store={store}>
        <AppRoutes/>
   </Provider>,
    document.getElementById('root')
);