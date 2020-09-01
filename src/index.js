import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import AppRoutes from './routes';

const store = createStore(rootReducer)

ReactDOM.render( 
    <Provider store={store}>
        <AppRoutes/>
   </Provider>,
    document.getElementById('root')
);
